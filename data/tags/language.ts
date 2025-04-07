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

export interface ILanguage extends Omit<ITag, 'description'>  {
  value: LanguageValue;
  nativeName: string;
}

const LANGUAGES: ILanguage[] = [
  {
    value: "en",
    label: "English",
    nativeName: "English",
  },
  {
    value: "uk",
    label: "Ukrainian",
    nativeName: "Українська",
  },
  {
    value: "fi",
    label: "Finnish",
    nativeName: "Suomi",
  },
  {
    value: "es",
    label: "Spanish",
    nativeName: "Español",
  },
  {
    value: "it",
    label: "Italian",
    nativeName: "Italiano",
  },
  {
    value: "pt",
    label: "Portuguese",
    nativeName: "Português",
  },
  {
    value: "de",
    label: "German",
    nativeName: "Deutsch",
  },
  {
    value: "fr",
    label: "French",
    nativeName: "Français",
  },
  {
    value: "sw",
    label: "Swahili",
    nativeName: "Kiswahili",
  },
  {
    value: "zh",
    label: "Chinese",
    nativeName: "中文",
  }
];

export default LANGUAGES;