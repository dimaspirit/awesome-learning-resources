export interface IBaseTag {
  label: string;
  description: string;
}

export type LanguageValue = 'en' | 'uk' | 'fi' | 'es' | 'it' | 'pt' | 'de' | 'fr' | 'sw' | 'zh';
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