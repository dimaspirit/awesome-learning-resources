import ITag from './types';

export type CategoryValue = 
  | 'programming'
  | 'webDevelopment'
  | 'fullStackDevelopment'
  | 'languageLearning';

interface ICategory extends ITag {
  value: CategoryValue;
}

export type Categories = Record<ICategory['value'], ICategory>;

const CATEGORIES: Categories = {
  programming: {
    value: 'programming',
    label: 'Programming & Software Development',
    description: 'Covers general programming languages and software engineering.'
  },
  webDevelopment: {
    value: 'webDevelopment',
    label: 'Web Development',
    description: 'Focuses on building websites and web applications.'
  },
  fullStackDevelopment: {
    value: 'fullStackDevelopment',
    label: 'Full Stack Development',
    description: 'Covers both web development and additional technologies.'
  },
  languageLearning: {
    value: 'languageLearning',
    label: 'Language Learning',
    description: 'Resources for improving language skills, especially for developers.'
  }
} as const;

export default CATEGORIES;