import React from "react";
import {MerchantTableColHeaders, Table, TableBody} from '../shared/tables'
import PrimaryButton from "../shared/buttons/PrimaryButton";
import CardFooter from "../cards/CardFooter";
import SecondaryButton from "../shared/buttons/SecondaryButton";

const EditInvoices = () => {
    const handleSaveChanges = () => {};
    const handleCancelChanges = () => {};

    return (
        <>
            <Table>
                <MerchantTableColHeaders/>
                <TableBody></TableBody>
            </Table>
            <CardFooter>
                <PrimaryButton
                    text="Save Changes"
                    onClick={handleSaveChanges}
                />
                <SecondaryButton
                    text="Cancel Changes"
                    onClick={handleCancelChanges}
                />
            </CardFooter>
        </>
    );
}

export default EditInvoices;
