import memoize from "memoize-one";

import es from "./lang/es";
import { Translation } from "./types";

export type Language = "es";

export type TranslationKey = keyof Translation;

export const translations: Record<Language, Translation> = {
  es
};

export const getTranslation = memoize(
  (language: Language | undefined) => (message: TranslationKey) => {
    return translations[language ? language : "es"][message];
  }
);
