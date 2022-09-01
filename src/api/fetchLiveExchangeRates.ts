import {CryptoCurrency, FiatCurrency} from "../types/currency";

export interface ExchangeRatesResponse {
    code: string;
    name: string;
    rate: number;
}

// Do I need to catch an error here or let React Query handle it?
async function fetchLiveExchangeRates(fromCrypto: CryptoCurrency, toFiat: FiatCurrency): Promise<ExchangeRatesResponse> {
    const fromCryptoString = CryptoCurrency[fromCrypto];
    const response = await fetch(`https://bitpay.com/api/rates/${fromCryptoString}/${toFiat}`);
    return await response.json();
}

export default fetchLiveExchangeRates;
