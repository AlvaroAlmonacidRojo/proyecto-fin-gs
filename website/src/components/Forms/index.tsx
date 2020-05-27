import _ from 'lodash';
import memoize from 'memoize-one';
import React, { ChangeEvent, Fragment, ReactElement, useReducer } from 'react';
import validate from 'validate.js';


export type actions = 'onChange' | 'invalidForm' | 'pending';

export type FormInput = boolean | string | undefined | string[];

export interface FormAction<T> {
  type: actions;
  value: FormInput;
  meta: {
    name: T;
  };
}

export interface FormProps {
  validationAlerts: string[];
}

type EventType = 'select' | 'text' | 'list';

const formReducer = <
  T extends Record<string, FormInput> & FormProps,
  K extends keyof T
>(
  state: T,
  { value, type, meta: { name } }: FormAction<K>,
) => {
  switch (type) {
    case 'onChange':
      return {
        ...state,
        [name]: value,
        validationAlerts: [], // reset validation alerts
      };
    case 'invalidForm':
      return {
        ...state,
        validationAlerts: value, // reset validation alerts
      };
    case 'pending':
      return {
        ...state,
        pending: value,
      };
    default:
      throw new Error();
  }
};

export function GenericForm<
  T extends Record<string, FormInput>,
  K extends keyof T
>({
  children,
  initialState,
  validations,
  submitCallback,
}: {
  initialState: T;
  validations: Record<K, {}>;
  submitCallback: (formData: {}) => () => void;
  children: (
    {
      state,
      handleChange,
    }: {
      state: T & { pending: boolean };
      handleChange: (
        eventType?: EventType,
      ) => (name: K) => (event: ChangeEvent<{}>) => void;
      handleSubmit: () => 'ok' | 'error';
    },
  ) => ReactElement;
}) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (): 'ok' | 'error' => {
    const formValidation = validate(state, validations, { format: 'flat' });
    if (formValidation) {
      dispatch({
        type: 'invalidForm',
        value: formValidation,
        meta: {
          name: '',
        },
      });
      return 'error';
    } else {
      submitCallback({
        ...state,
        validationAlerts: undefined,
        pending: undefined,
      })();
      dispatch({
        type: 'pending',
        value: true,
        meta: {
          name: '',
        },
      });
      return 'ok';
    }
  };

  const selectType = (event: any, name: K, eventType?: EventType): any => {
    if (eventType) {
      switch (eventType) {
        case 'select':
          return event.value;
        case 'text':
          event.persist();
          return (event.target as HTMLInputElement).value;
        case 'list':
          event.persist();
          const value = (event.target as HTMLSelectElement).value;
          return value;
      }
    } else {
      return undefined;
    }
  };

  const handleChange = (eventType?: EventType) => (name: K) =>
    memoize((event: any) => {
      dispatch({
        type: 'onChange',
        value: selectType(event, name, eventType),
        meta: {
          name,
        },
      });
    });

  return (
    <Fragment>
      <Fragment>
        {!!(state.validationAlerts && state.validationAlerts.length) && (
          <>{state.validationAlerts.map(
            (message: string, index: number) => {
              return (
                <div key={index}>
                  <span>{message}</span>
                </div>
              );
            },
          )}</>
        )}
      </Fragment>
      <Fragment> {children({ state, handleChange, handleSubmit })}</Fragment>
    </Fragment>
  );
}
