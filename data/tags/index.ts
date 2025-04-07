import LANGUAGES, { ILanguage } from './language';
import CATEGORIES, { ICategory } from './category';
import TYPES, { IType } from './type';
import PRICES, { IPrice } from './price';

type TagList = IPrice[] | ILanguage[] | ICategory[] | IType[];

export type TagValues = 'language' | 'type' | 'price' | 'category';

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
  category: {
    label: 'Category',
    value: 'category',
    description: 'Broad subjects a resource covers, defining its main area of focus.',
    list: CATEGORIES,
  }
};

export default TAGS;