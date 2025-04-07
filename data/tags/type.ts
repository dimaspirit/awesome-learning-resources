import ITag from './types';

export type TypeValues = 
  | 'course'
  | 'path';

export interface IType extends ITag {
  value: TypeValues;
}

const TYPES: IType[] = [
  {
    value: 'course',
    label: 'Course',
    description: 'A standalone learning program focused on a specific topic.',
  },
  {
    value: 'path',
    label: 'Path',
    description: 'A guided sequence of courses for deeper learning.',
  }
 ] as const;

export default TYPES;