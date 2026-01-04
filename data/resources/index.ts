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
    "language": ["az","id","cs","da","de","en","es","fr","it","lv","lt","hu","no","nl","uz","pl","pt","ro","sv","vi","tr","el","bg","ky","kk","mn","ru","sr","uk","ka","ur","ar","mr","hi","as","bn","pa","km","ko","zh","ja"],
    "types": ["course"],
    "price": "free",
  }
]

export default RESOURCES;