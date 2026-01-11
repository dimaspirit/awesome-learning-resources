import { LanguageValue, PriceValue, TypeValue } from "../tags/types";

export interface IResource {
  link: string;
  title: string;
  price: PriceValue;
  types: TypeValue[];
  language: LanguageValue[];
  description?: string;
}

const RESOURCES:IResource[] = [
  {
    "link": "https://www.freecodecamp.org/learn/",
    "title": "freeCodeCamp",
    "language": ["en", "zh", "es", "pt", "de", "it", "sw", "uk"],
    "types": ["course"],
    "price": "free",
  },
  {
    "link": "https://fullstackopen.com/",
    "title": "FullStackOpen",
    "language": ["en", "zh", "es", "fr", "pt", "fi"],
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
  },
  {
    "link": "https://skillbuilder.aws/",
    "title": "AWS Skill Builder",
    "language": ["en"],
    "types": ["course", "path"],
    "price": "freemium",
  },
  {
    "link": "https://www.khanacademy.org/",
    "title": "Khan Academy",
    "language": ["en","zh","hi","es","fr","ar","bn","pt","ru","ur","id","ja","pa","mr","ko","vi","tr","de","it","pl","ro","nl","uk","el","hu","cs","sv","bg","no","sr","lt","lv","km","as","kk","uz","mn","ky","ka","az"],
    "types": ["course"],
    "price": "free",
  }
]

export default RESOURCES;