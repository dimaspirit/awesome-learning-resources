const PRICES = [
  {
    value: 'free',
    label: 'Free',
    description: 'Fully accessible at no cost, no payments required'
  },
  {
    value: 'freemium',
    label: 'Freemium',
    description: 'Free access with optional paid features or upgrades'
  },
  {
    value: 'paid',
    label: 'Paid',
    description: 'Requires payment to access content or features'
  },
] as const


export { PRICES };