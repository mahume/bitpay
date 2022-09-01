import React, {useState} from "react";
import useInvoices from "../../hooks/useInvoices";
import {Table, TableBody, TableCell, TableRow, MerchantTableColHeaders} from '../shared/tables'
import {Checkbox} from "../shared/forms";
import PrimaryButton from "../shared/buttons/PrimaryButton";
import CardFooter from "../cards/CardFooter";
import SecondaryButton from "../shared/buttons/SecondaryButton";
import {CryptoCurrency} from "../../types/currency";
import Paragraph from "../shared/texts/Paragraph";
import {useCurrency} from "../../hooks/useCurrency";

const DeleteInvoices = () => {
    const {invoices, deleteInvoice} = useInvoices();
    const {formatCryptoCurrency, formatCryptoPriceInUSD} = useCurrency();
    const [selectedInvoices, setSelectedInvoices] = useState<Array<string>>([]);

    const handleDelete = () => {
        deleteInvoice(selectedInvoices);
        setSelectedInvoices([]);
    };

    const handleClick = (id: string) => {
        const newSelectedInvoices = selectedInvoices.includes(id)
            ? selectedInvoices.filter(invoiceId => invoiceId !== id)
            : [...selectedInvoices, id];
        setSelectedInvoices(newSelectedInvoices);
    }

    const handleClearSelected = () => {
        setSelectedInvoices([]);
    }

    return (
        <>
            <Table>
                <MerchantTableColHeaders/>
                <TableBody>
                    {invoices && invoices.map(({id, merchant, item, payment}) => (
                            <TableRow key={id}>
                                <TableCell flex={1}>
                                    <Paragraph text={merchant} size="16px" weight={500}/>
                                </TableCell>
                                <TableCell flex={1}>
                                    <Paragraph text={item} size="16px" weight={500}/>
                                </TableCell>
                                <TableCell flex={1} textAlign="right">
                                    <Paragraph text={formatCryptoCurrency(payment.amount)} size="16px" weight={500}/>
                                </TableCell>
                                <TableCell flex={1}>{CryptoCurrency[payment.currency]}</TableCell>
                                <TableCell flex={1} textAlign="right">
                                    {formatCryptoPriceInUSD(payment.currency) ?? '-'}
                                </TableCell>
                                <TableCell flex={1} textAlign="right">
                                    {formatCryptoPriceInUSD(payment.currency, payment.amount) ?? '-'}
                                </TableCell>
                                <TableCell flex={0.2}>
                                    <Checkbox id={id} onClick={handleClick} isChecked={selectedInvoices.includes(id)}/>
                                </TableCell>
                            </TableRow>
                        )
                    )}
                </TableBody>
            </Table>
            <CardFooter>
                <PrimaryButton
                    text="Delete"
                    onClick={handleDelete}
                    isDisabled={selectedInvoices.length === 0}
                />
                <SecondaryButton
                    text="Undo"
                    onClick={handleClearSelected}
                    isVisible={selectedInvoices.length > 0}
                />
            </CardFooter>
        </>
    );
}

export default DeleteInvoices;
