
import { TypeCodes } from "@/data/tags/types";

export interface IResource {
  title: string;
  link: string;
  languages: string[];
  types: TypeCodes[];
}