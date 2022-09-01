import {CryptoCurrency} from "../types/currency";
import {useAppContext} from "../context";

const fiatCurrencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const cryptoCurrencyFormatter = (cryptoCurrency: number): string =>
    cryptoCurrency.toFixed(8).toString();

export const useCurrency = () => {
    const {state} = useAppContext();

    function formatCryptoPriceInUSD(cryptoCurrency: CryptoCurrency, multiplier?: number) {
        if (state.exchangeRates.has(cryptoCurrency)) {
            const currentRate = state.exchangeRates.get(cryptoCurrency)?.rate;
            if (currentRate) {
                const priceInUSD = multiplier ? multiplier * currentRate : currentRate;
                return fiatCurrencyFormatter.format(priceInUSD);
            }
        }
    }


    return {
        formatCryptoCurrency: cryptoCurrencyFormatter,
        formatCryptoPriceInUSD,
    }
};
