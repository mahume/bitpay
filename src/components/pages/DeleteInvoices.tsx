import React from "react";
import {MerchantTableColHeaders, Table, TableBody} from '../shared/tables'
import PrimaryButton from "../shared/buttons/PrimaryButton";
import CardFooter from "../cards/CardFooter";
import SecondaryButton from "../shared/buttons/SecondaryButton";

const DeleteInvoices = () => {
    const handleDelete = () => '';
    const handleClearSelected = () => '';

    return (
        <>
            <Table>
                <MerchantTableColHeaders/>
                <TableBody></TableBody>
            </Table>
            <CardFooter>
                <PrimaryButton
                    text="Delete"
                    onClick={handleDelete}
                />
                <SecondaryButton
                    text="Undo"
                    onClick={handleClearSelected}
                />
            </CardFooter>
        </>
    );
}

export default DeleteInvoices;
