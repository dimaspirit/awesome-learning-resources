export type PriceCode = 'free' | 'freemium' | 'paid';

interface IPrice {
  code: PriceCode;
  name: string;
  description: string;
}

type prices = Record<IPrice['code'], IPrice>;

const PRICES: prices = {
  free: {
    code: 'free',
    name: 'Free',
    description: 'Fully accessible at no cost, no payments required'
  },
  freemium: {
    code: 'freemium',
    name: 'Freemium',
    description: 'Free access with optional paid features or upgrades'
  },
  paid: {
    code: 'paid',
    name: 'Paid',
    description: 'Requires payment to access content or features'
  }
}

export default PRICES;