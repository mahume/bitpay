import {useAppContext} from "../context";
import {Invoice} from "../types/merchants";

const useInvoices = () => {
    const {state, dispatch} = useAppContext();

    const handleDeleteInvoice = (ids: Array<string>) => {
        dispatch({
            type: "DELETE_INVOICE",
            payload: {ids}
        });
    };
    const handleAddInvoice = (invoice: Invoice) => {
        dispatch({
            type: "ADD_INVOICE",
            payload: {invoices: [invoice]}
        });
    };
    const handleEditInvoice = (invoices: Array<Invoice>) => {
        dispatch({
            type: "EDIT_INVOICE",
            payload: {invoices}
        });
    };

    return {
        invoices: state.invoices,
        deleteInvoice: handleDeleteInvoice,
        addInvoice: handleAddInvoice,
        editInvoice: handleEditInvoice,
    }
};

export default useInvoices;
