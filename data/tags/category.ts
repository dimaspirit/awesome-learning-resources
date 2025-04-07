import ITag from './types';

export type CategoryValue = 
  | 'programming'
  | 'webDevelopment'
  | 'fullStackDevelopment'
  | 'languageLearning';

export interface ICategory extends ITag {
  value: CategoryValue;
}

const CATEGORIES: ICategory[] = [
  {
    value: 'programming',
    label: 'Programming & Software Development',
    description: 'Covers general programming languages and software engineering.'
  },
  {
    value: 'webDevelopment',
    label: 'Web Development',
    description: 'Focuses on building websites and web applications.'
  },
  {
    value: 'fullStackDevelopment',
    label: 'Full Stack Development',
    description: 'Covers both web development and additional technologies.'
  },
  {
    value: 'languageLearning',
    label: 'Language Learning',
    description: 'Resources for improving language skills, especially for developers.'
  }
] as const;

export default CATEGORIES;