import { IResource } from "@/types/resource";

const resources:IResource[] = [
  {
    "link": "https://www.freecodecamp.org/learn/",
    "title": "freeCodeCamp",
    "languages": ["en", "es", "it", "pt", "uk", "de", "sw", "zh"],
    "types": ["course"],
    "price": "free",
  },
  {
    "link": "https://fullstackopen.com/",
    "title": "FullStackOpen",
    "languages": ["en", "fi", "zh", "es", "fr", "pt"],
    "types": ["path"],
    "price": "free",
  },
  {
    "link": "https://prometheus.org.ua/courses-catalog?price=0",
    "title": "Prometheus",
    "languages": ["uk"],
    "types": ["course"],
    "price": "freemium",
  },
  {
    "link": "https://developer.mozilla.org/en-US/curriculum/",
    "title": "MDN Curriculum",
    "languages": ["en"],
    "types": ["path"],
    "price": "free",
  }
]

export default resources;