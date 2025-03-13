
import { TypeCodes } from "@/data/tags/types";
import { PriceCode } from '@/data/tags/prices';


export interface IResource {
  title: string;
  link: string;
  languages: string[];
  types: TypeCodes[];
  price: PriceCode;
}