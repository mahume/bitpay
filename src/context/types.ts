import {Invoice} from "../types/merchants";
import {ExchangeRatesResponse} from "../api/fetchLiveExchangeRates";
import {CryptoCurrency} from "../types/currency";

export interface AppState {
    invoices: Invoice[];
    exchangeRates: Map<CryptoCurrency, ExchangeRatesResponse>;
    isLoading: boolean;
}

export type AppAction = AddInvoice | EditInvoice | DeleteInvoice | SetExchangeRates | SetLoading;

export interface AddInvoice {
    readonly type: "ADD_INVOICE";
    readonly payload: {
        invoices: Array<Invoice>;
    }
}
export interface EditInvoice {
    readonly type: "EDIT_INVOICE";
    readonly payload: {
        invoices: Array<Invoice>;
    }
}
export interface DeleteInvoice {
    readonly type: "DELETE_INVOICE";
    readonly payload: {
        ids: Array<string>;
    }
}
export interface SetExchangeRates {
    readonly type: "SET_EXCHANGE_RATES";
    readonly payload: {
        exchangeRates: Map<CryptoCurrency, ExchangeRatesResponse>;
    }
}
export interface SetLoading {
    readonly type: "SET_LOADING";
    readonly payload: {
        isLoading: boolean;
    }
}
