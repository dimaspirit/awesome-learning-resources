import ITag from './types';

type PriceValue = 
  | 'free'
  | 'freemium'
  | 'paid';

interface Price extends ITag {
  value: PriceValue;
}

export type Prices = Record<Price['value'], Price>;

const PRICES: Prices = {
  free: {
    value: 'free',
    label: 'Free',
    description: 'Fully accessible at no cost, no payments required'
  },
  freemium: {
    value: 'freemium',
    label: 'Freemium',
    description: 'Free access with optional paid features or upgrades'
  },
  paid: {
    value: 'paid',
    label: 'Paid',
    description: 'Requires payment to access content or features'
  }
}

export default PRICES;