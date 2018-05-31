const emailConstants = {
  space: [
    {value: 1, label: '1GB'}, {value: 2, label: '2GB'}, {value: 5, label: '5GB'},
    {value: 10, label: '10GB'}, {value: 20, label: '20GB'}, {value: 25, label: '25GB'}, {value: 50, label: '50GB'}
  ],
  emailPlans: ['E-mail Umbler', 'E-mail Exchange'],
  emailPrices: [
    {size: 1, price: 0.75, benchPrice: 1.58},{size: 2, price: 1.5, benchPrice: 3.10},
    {size: 5, price: 3.75, benchPrice: 4.90},{size: 10, price: 7.5, benchPrice: 9.90},
    {size: 20, price: 15, benchPrice: 19.90},{size: 25, price: 9, benchPrice: 12.90},
    {size: 50, price: 14, benchPrice: 21.90}
  ]
};

export default emailConstants;
