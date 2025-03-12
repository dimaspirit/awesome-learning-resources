import languages from "./languages";
import types from './types';
import PRICES from "./prices";

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
  },
  price: {
    name: "Price",
    description: "Indicates whether a resource is free, freemium, or requires payment.",
    list: PRICES,
  }
}

export {
  languages,
  types,
  PRICES,
}

export default tags;