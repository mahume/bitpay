export enum FiatCurrency {
    USD = 'USD',
}

export enum CryptoCurrency {
    BTC = 1,
    BCH,
    ETH,
}

export type Currency = FiatCurrency | CryptoCurrency;
