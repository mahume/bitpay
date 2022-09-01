import {AppState} from "./types";
import {merchantFakes} from "../mocks/invoiceFakes";
import {CryptoCurrency} from "../types/currency";
import {ExchangeRatesResponse} from "../api/fetchLiveExchangeRates";

export const INITIAL_APP_STATE: AppState = {
    invoices: merchantFakes,
    exchangeRates: new Map<CryptoCurrency, ExchangeRatesResponse>(),
    isLoading: false,
};
