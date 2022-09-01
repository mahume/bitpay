import React from "react";
import {Table, TableBody, TableCell, TableRow, MerchantTableColHeaders} from '../shared/tables'
import {CryptoCurrency} from "../../types/currency";
import Paragraph from "../shared/texts/Paragraph";
import {useCurrency} from "../../hooks/useCurrency";
import useInvoices from "../../hooks/useInvoices";

const ViewInvoices = () => {
    const {invoices} = useInvoices();
    const {formatCryptoCurrency, formatCryptoPriceInUSD} = useCurrency();

    return (
        <Table>
            <MerchantTableColHeaders/>
            <TableBody>
                {invoices && invoices.map(({id, merchant, item, payment}) => (
                        <TableRow key={id}>
                            <TableCell flex={1}>
                                <Paragraph text={merchant} size="16px" weight={500} />
                            </TableCell>
                            <TableCell flex={1}>
                                <Paragraph text={item} size="16px" weight={500} />
                            </TableCell>
                            <TableCell flex={1} textAlign="right">
                                <Paragraph text={formatCryptoCurrency(payment.amount)} size="16px" weight={500} />
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
    );
}

export default ViewInvoices;
