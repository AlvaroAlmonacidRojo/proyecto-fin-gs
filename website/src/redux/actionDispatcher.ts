import memoizeOne from 'memoize-one';

import { Dispatcher } from './reducer';

const actionDispatcher = <
  Args extends any[],
  ActionCreator extends (...args: Args) => any
>(
  actionCreator: ActionCreator,
  dispatch: Dispatcher,
): ((...args: Args) => () => void) =>
  memoizeOne((...args) => () => {
    dispatch(actionCreator(...args as Args));
  });

export default actionDispatcher;
