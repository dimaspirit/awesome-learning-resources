export type PriceCode = 'free' | 'freemium' | 'paid';

export interface IPrice {
  value: PriceCode;
  label: string;
  description: string;
}

type prices = Record<IPrice['value'], IPrice>;

const PRICES: prices = {
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