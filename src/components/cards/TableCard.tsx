import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import ViewInvoices from "../pages/ViewInvoices";
import AddInvoice from "../pages/AddInvoice";
import DeleteInvoices from "../pages/DeleteInvoices";
import EditInvoices from "../pages/EditInvoices";
import useFetchExchangeRates from "../../hooks/useFetchExchangeRates";
import {useEffect} from "react";
import Welcome from "../pages/Welcome";

const CardContainer = styled.div`
  border-radius: 20px;
  box-shadow: 0 0 54px rgba(0, 0, 0, .1);
  background-color: #FFF;
  width: 70vw;
  min-height: 700px;
  padding: 45px 45px 10px 45px;

  display: flex;
  flex-direction: column;
`;

const TableCard = () => {
    const {fetchRates} = useFetchExchangeRates();

    useEffect(() => {
        fetchRates();
    }, []);

    return (
        <CardContainer>
            <CardHeader/>
            <CardBody>
                <Routes>
                    <Route path="/" element={<Welcome/>}/>
                    <Route path="/view" element={<ViewInvoices/>}/>
                    <Route path="/add" element={<AddInvoice/>}/>
                    <Route path="/delete" element={<DeleteInvoices/>}/>
                    <Route path="/edit" element={<EditInvoices/>}/>
                </Routes>
            </CardBody>
        </CardContainer>
    );
}

export default TableCard;
