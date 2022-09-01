import {AppAction, AppState} from "./types";

export const reduceAppContext = (state: AppState, action: AppAction): AppState => {
    switch (action.type) {
        case "ADD_INVOICE":
            return {
                ...state,
                invoices: [...state.invoices, ...action.payload.invoices],
            };
        case "EDIT_INVOICE":
            return {
                ...state,
                invoices: action.payload.invoices,
            };
        case "DELETE_INVOICE":
            return {
                ...state,
                invoices: state.invoices.filter(i => !action.payload.ids.includes(i.id)),
            };
        case "SET_EXCHANGE_RATES":
            return {
                ...state,
                exchangeRates: action.payload.exchangeRates,
            };
        case "SET_LOADING":
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }
        default: {
            throw new Error(`Unhandled action type`);
        }
    }
}
