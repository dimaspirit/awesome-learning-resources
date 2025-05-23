import { LanguageValue } from "../tags/language";
import { PriceValue } from "../tags/price";

export interface IResource {
  link: string;
  title: string;

  price: PriceValue;

  types: string[];
  language: LanguageValue[];
}

const RESOURCES:IResource[] = [
  {
    "link": "https://www.freecodecamp.org/learn/",
    "title": "freeCodeCamp",
    "language": ["en", "es", "it", "pt", "uk", "de", "sw", "zh"],
    "types": ["course"],
    "price": "free",
  },
  {
    "link": "https://fullstackopen.com/",
    "title": "FullStackOpen",
    "language": ["en", "fi", "zh", "es", "fr", "pt"],
    "types": ["path"],
    "price": "free",
  },
  {
    "link": "https://prometheus.org.ua/courses-catalog?price=0",
    "title": "Prometheus",
    "language": ["uk"],
    "types": ["course"],
    "price": "freemium",
  },
  {
    "link": "https://developer.mozilla.org/en-US/curriculum/",
    "title": "MDN Curriculum",
    "language": ["en"],
    "types": ["path"],
    "price": "free",
  }
]

export default RESOURCES;