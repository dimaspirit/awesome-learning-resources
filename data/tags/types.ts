export interface IBaseTag {
  label: string;
  description: string;
}

export type LanguageValue =
  | 'ar'
  | 'hy'
  | 'as'
  | 'az'
  | 'bn'
  | 'bg'
  | 'my'
  | 'zh'
  | 'cs'
  | 'da'
  | 'nl'
  | 'en'
  | 'fi'
  | 'fr'
  | 'de'
  | 'el'
  | 'hi'
  | 'mr'
  | 'hu'
  | 'id'
  | 'it'
  | 'ja'
  | 'kn'
  | 'km'
  | 'ko'
  | 'kk'
  | 'ky'
  | 'lv'
  | 'lt'
  | 'mn'
  | 'no'
  | 'or'
  | 'pl'
  | 'pt'
  | 'pa'
  | 'ro'
  | 'ru'
  | 'sr'
  | 'es'
  | 'sw'
  | 'sv'
  | 'tr'
  | 'uk'
  | 'uz'
  | 'ur'
  | 'vi'
  | 'ka';

export interface ILanguage extends Omit<IBaseTag, 'description'> {
  value: LanguageValue;
  nativeName: string;
}

export type PriceValue = 'free' | 'freemium' | 'paid';
export interface IPrice extends IBaseTag {
  value: PriceValue;
}

export type TypeValue = 'course' | 'path';
export interface IType extends IBaseTag {
  value: TypeValue;
}