import {Invoice} from "../types/merchants";
import {CryptoCurrency} from "../types/currency";

export const merchantFakes: Invoice[] = [{
    id: "1",
    merchant: "ShirtTown",
    item: "T-shirts",
    payment: {
        amount: 1.43219876,
        currency: CryptoCurrency.BTC,
    },
}, {
    id: "2",
    merchant: "CrazyCups",
    item: "Cups",
    payment: {
        amount: 2.76236751,
        currency: CryptoCurrency.BCH,
    },
}, {
    id: "3",
    merchant: "GimmeGold",
    item: "Gold bullion",
    payment: {
        amount: 10.78654328,
        currency: CryptoCurrency.ETH,
    },
}];
