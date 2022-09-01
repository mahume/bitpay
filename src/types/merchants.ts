import {CryptoCurrency} from "./currency";

export interface Payment {
    amount: number;
    currency: CryptoCurrency;
}

export interface Invoice {
    id: string;
    merchant: string;
    item: string;
    payment: Payment;
}
