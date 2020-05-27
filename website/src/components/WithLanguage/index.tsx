import React from 'react';

import { LanguageContext } from '../Translation/context';
import { Language } from '../../util/translations';

export interface WithLanguage {
  lang?: Language;
}

export const withLanguage = <P extends WithLanguage>(
  Component: React.ComponentType<P>,
): React.FC<P> => ({ ...props }) => {
  return (
    <LanguageContext.Consumer>
      {(lang: Language) => {
        const componentProps: P = {
          ...props,
          lang,
        };
        return <Component {...componentProps} />;
      }}
    </LanguageContext.Consumer>
  );
};
