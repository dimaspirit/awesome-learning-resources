interface ILanguage {
  code: string;
  name: string;
  nativeName: string;
}

type ILanguages = Record<ILanguage['code'], ILanguage>;

const languages: ILanguages = {
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
  },
  uk: {
    code: "uk",
    name: "Ukrainian",
    nativeName: "Українська",
  },
  fi: {
    code: "fi",
    name: "Finnish",
    nativeName: "Suomi",
  },
  es: {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
  },
  it: {
    code: "it",
    name: "Italian",
    nativeName: "Italiano",
  },
  pt: {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português",
  },
  de: {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
  },
  fr: {
    code: "fr",
    name: "French",
    nativeName: "Français",
  },
  sw: {
    code: "sw",
    name: "Swahili",
    nativeName: "Kiswahili",
  },
  zh: {
    code: "zh",
    name: "Chinese",
    nativeName: "中文",
  }
};

export default languages;