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
    description: "",
  },
  path: {
    code: 'path',
    name: "Path",
    description: "",
  }
}

export default types;