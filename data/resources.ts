
// import { TypeCodes } from "@/data/tags/";
// import { PriceCode } from '@/data/tags/prices';
// import { Category } from '@/data/tags/category';

import { CategoryValue } from "./tags/category";
import { LanguageValue } from "./tags/languages";


export interface IResource {
  link: string;
  title: string;
  language: LanguageValue[];
  category: CategoryValue[],
  types: string[];
  price: string;
}

const resources:IResource[] = [
  {
    "link": "https://www.freecodecamp.org/learn/",
    "title": "freeCodeCamp",
    "language": ["en", "es", "it", "pt", "uk", "de", "sw", "zh"],
    "types": ["course"],
    "price": "free",
    "category": ["programming", "webDevelopment", "fullStackDevelopment", "languageLearning"]
  },
  {
    "link": "https://fullstackopen.com/",
    "title": "FullStackOpen",
    "language": ["en", "fi", "zh", "es", "fr", "pt"],
    "types": ["path"],
    "price": "free",
    "category": ["programming", "webDevelopment", "fullStackDevelopment"]
  },
  {
    "link": "https://prometheus.org.ua/courses-catalog?price=0",
    "title": "Prometheus",
    "language": ["uk"],
    "types": ["course"],
    "price": "freemium",
    "category": ["programming", "webDevelopment"]
  },
  {
    "link": "https://developer.mozilla.org/en-US/curriculum/",
    "title": "MDN Curriculum",
    "language": ["en"],
    "types": ["path"],
    "price": "free",
    "category": ["programming", "webDevelopment"]
  }
]

export default resources;