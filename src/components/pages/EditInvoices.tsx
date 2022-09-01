import React, {ChangeEvent, useState} from "react";
import useInvoices from "../../hooks/useInvoices";
import {Table, TableBody, TableCell, TableRow, MerchantTableColHeaders} from '../shared/tables'
import TableCellInput from "../shared/tables/TableCellInput";
import CardFooter from "../cards/CardFooter";
import PrimaryButton from "../shared/buttons/PrimaryButton";
import SecondaryButton from "../shared/buttons/SecondaryButton";
import {CryptoCurrency} from "../../types/currency";
import {Invoice} from "../../types/merchants";
import {useCurrency} from "../../hooks/useCurrency";

const EditInvoices = () => {
    const {invoices, editInvoice} = useInvoices();
    const {formatCryptoCurrency, formatCryptoPriceInUSD} = useCurrency();

    const [invoiceChanges, setInvoiceChanges] = useState<Array<Invoice>>(invoices);
    const [hasMadeChanges, setHasMadeChanges] = useState(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {id, name, value} = event.target;

        const editedInvoices = invoiceChanges.map(invoice => {
            if (invoice.id === id) {
                switch (name) {
                    case 'merchant':
                    case 'item':
                        return {...invoice, [name]: value}
                    case 'amount':
                    case 'currency':
                        return {
                            ...invoice,
                            payment: {
                                ...invoice.payment,
                                [name]: name === 'amount' ? Number(value) : CryptoCurrency[Number(value)]
                            }
                        }
                    default:
                        return invoice;
                }
            }

            return invoice;
        });

        setInvoiceChanges(editedInvoices);
    }

    const handleSaveChanges = () => {
        editInvoice(invoiceChanges);
        setHasMadeChanges(false);
    }

    const handleCancelChanges = () => {
        setInvoiceChanges(invoices);
        setHasMadeChanges(false);
    }

    return (
        <>
            <Table>
                <MerchantTableColHeaders/>
                <TableBody>
                    {invoiceChanges && invoiceChanges.map(({id, merchant, item, payment}) => (
                            <TableRow key={id}>
                                <TableCell flex={1}>
                                    <TableCellInput
                                        id={id}
                                        value={merchant}
                                        name="merchant"
                                        onFocus={() => setHasMadeChanges(true)}
                                        onChange={handleInputChange}
                                    />
                                </TableCell>
                                <TableCell flex={1}>
                                    <TableCellInput
                                        id={id}
                                        value={item}
                                        name="item"
                                        onFocus={() => setHasMadeChanges(true)}
                                        onChange={handleInputChange}
                                    />
                                </TableCell>
                                <TableCell flex={1} textAlign="right">
                                    <TableCellInput
                                        id={id}
                                        name="amount"
                                        type="number"
                                        onFocus={() => setHasMadeChanges(true)}
                                        value={formatCryptoCurrency(payment.amount)}
                                        onChange={handleInputChange}
                                        style={{textAlign: 'right'}}
                                    />
                                </TableCell>
                                <TableCell flex={1}>{CryptoCurrency[payment.currency]}</TableCell>
                                <TableCell flex={1} textAlign="right">
                                    {formatCryptoPriceInUSD(payment.currency) ?? '-'}
                                </TableCell>
                                <TableCell flex={1} textAlign="right">
                                    {formatCryptoPriceInUSD(payment.currency, payment.amount) ?? '-'}
                                </TableCell>
                                <TableCell flex={0.2}/>
                            </TableRow>
                        )
                    )}
                </TableBody>
            </Table>
            <CardFooter>
                <PrimaryButton
                    text="Save Changes"
                    onClick={handleSaveChanges}
                    isDisabled={!hasMadeChanges}
                />
                <SecondaryButton
                    text="Cancel Changes"
                    onClick={handleCancelChanges}
                    isVisible={hasMadeChanges}
                />
            </CardFooter>
        </>
    );
}

export default EditInvoices;
