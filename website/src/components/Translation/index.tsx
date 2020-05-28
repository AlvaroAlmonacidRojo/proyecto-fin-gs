import React, { FC, Fragment } from "react";

import { getTranslation, TranslationKey } from "../../util/translations";

import { LanguageContext } from "./context";

interface Props {
  message: TranslationKey;
}

const Translate: FC<Props> = ({ message }) => (
  <LanguageContext.Consumer>
    {language => <Fragment>{getTranslation(language)(message)}</Fragment>}
  </LanguageContext.Consumer>
);

export default Translate;
