import React from "react";

import { Language } from "../../util/translations";
import { LanguageContext } from "../Translation/context";

export interface WithLanguage {
  lang?: Language;
}

export const withLanguage = <P extends WithLanguage>(
  Component: React.ComponentType<P>
): React.FC<P> => ({ ...props }) => {
  return (
    <LanguageContext.Consumer>
      {(lang: Language) => {
        const componentProps: P = {
          ...props,
          lang
        };
        return <Component {...componentProps} />;
      }}
    </LanguageContext.Consumer>
  );
};
