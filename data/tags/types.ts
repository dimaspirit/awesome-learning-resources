export type TypeCodes = 'course' | 'path';

interface IType {
  code: TypeCodes;
  name: string;
  description: string;
}

type ITypes = Record<IType['code'], IType>;

const types: ITypes = {
  course: {
    code: 'course',
    name: "Course",
    description: "A standalone learning program focused on a specific topic.",
  },
  path: {
    code: 'path',
    name: "Path",
    description: "A guided sequence of courses for deeper learning.",
  }
}

export default types;