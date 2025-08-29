import { ILanguage, IPrice, IType } from './types';
import { LANGUAGES } from './language';
import { PRICES } from './price';
import { TYPES } from './type';

export interface Tag {
  label: string;
  value: 'language' | 'type' | 'price';
  description: string;
  list: ILanguage[] | IPrice[] | IType[];
}

const TAGS = {
  language: {
    label: 'Language',
    value: 'language',
    description: 'The languages the resource is available in.',
    list: LANGUAGES,
  },
  type: {
    label: 'Type',
    value: 'type',
    description: 'Defines the structure and delivery format of a learning resource.',
    list: TYPES,
  },
  price: {
    label: 'Price',
    value: 'price',
    description: 'Indicates whether a resource is free, freemium, or requires payment.',
    list: PRICES,
  },
};

export { TAGS };
export * from './types';