import ITag from './types';

export type TypeValue = 
  | 'course'
  | 'path';

interface IType extends ITag {
  value: TypeValue;
}

export type Types = Record<IType['value'], IType>;

const TYPES: Types = {
  course: {
    value: 'course',
    label: 'Course',
    description: 'A standalone learning program focused on a specific topic.',
  },
  path: {
    value: 'path',
    label: 'Path',
    description: 'A guided sequence of courses for deeper learning.',
  }
} as const;

export default TYPES;