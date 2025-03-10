import languages from "./languages";
import types from './types';

const tags = {
  languages: {
    name: "Languages",
    description: "The languages the resource is available in",
    list: languages,
  },
  types: {
    name: "Types",
    description: "Defines the structure and delivery format of a learning resource.",
    list: types,
  }
}

export {
  languages,
  types,
}

export default tags;