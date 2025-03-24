import ITag from './types';

export type LanguageValue = 
  | 'en'
  | 'uk'
  | 'fi'
  | 'es'
  | 'it'
  | 'pt'
  | 'de'
  | 'fr'
  | 'sw'
  | 'zh';

interface ILanguage extends Omit<ITag, 'description'>  {
  value: LanguageValue;
  nativeName: string;
}

export type Languages = Record<ILanguage['value'], ILanguage>;

const LANGUAGES: Languages = {
  en: {
    value: "en",
    label: "English",
    nativeName: "English",
  },
  uk: {
    value: "uk",
    label: "Ukrainian",
    nativeName: "Українська",
  },
  fi: {
    value: "fi",
    label: "Finnish",
    nativeName: "Suomi",
  },
  es: {
    value: "es",
    label: "Spanish",
    nativeName: "Español",
  },
  it: {
    value: "it",
    label: "Italian",
    nativeName: "Italiano",
  },
  pt: {
    value: "pt",
    label: "Portuguese",
    nativeName: "Português",
  },
  de: {
    value: "de",
    label: "German",
    nativeName: "Deutsch",
  },
  fr: {
    value: "fr",
    label: "French",
    nativeName: "Français",
  },
  sw: {
    value: "sw",
    label: "Swahili",
    nativeName: "Kiswahili",
  },
  zh: {
    value: "zh",
    label: "Chinese",
    nativeName: "中文",
  }
};

export default LANGUAGES;