import TYPES, { IType } from './type';
import PRICES, { IPrice } from './price';
import LANGUAGES, { ILanguage } from './language';

type TagList = IPrice[] | ILanguage[] | IType[];

export type TagValues = 'language' | 'type' | 'price';

export type Tag = {
  label: string;
  value: TagValues;
  description: string;
  list: TagList;
}

export type Tags = Record<Tag['value'], Tag>;

const TAGS: Tags = {
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

export default TAGS;