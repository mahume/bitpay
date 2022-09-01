import {useEffect} from "react";
import fetchLiveExchangeRates, {ExchangeRatesResponse} from "../api/fetchLiveExchangeRates";
import {CryptoCurrency, FiatCurrency} from "../types/currency";
import {useAppContext} from "../context";

const twoMinutes = 1000 * 60 * 2;

const useFetchExchangeRates = () => {
    const {state, dispatch} = useAppContext();

    // TODO: Add error handling to catch network errors
    const fetchRates = async () => {
        const cryptoCurrenciesToFetch = Array.from(new Set(state.invoices.map((i) => i.payment.currency)));
        const exchangeRates = new Map<CryptoCurrency, ExchangeRatesResponse>();

        Promise.all(
            cryptoCurrenciesToFetch.map(async (cryptoCurrency) => {
                const response: ExchangeRatesResponse = await fetchLiveExchangeRates(cryptoCurrency, FiatCurrency.USD)
                exchangeRates.set(cryptoCurrency, response);
            })
        )

        dispatch({type: "SET_EXCHANGE_RATES", payload: {exchangeRates}});
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('Auto fetching exchange rates');
            fetchRates();
        }, twoMinutes);

        return () => clearInterval(intervalId);
    }, []);

    return {
        fetchRates,
    }
};

export default useFetchExchangeRates;
