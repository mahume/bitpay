import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import Welcome from "../pages/Welcome";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import ViewInvoices from "../pages/ViewInvoices";
import EditInvoices from "../pages/EditInvoices";
import DeleteInvoices from "../pages/DeleteInvoices";
import AddInvoice from "../pages/AddInvoice";

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
    return (
        <CardContainer>
            <CardHeader/>
            <CardBody>
                <Routes>
                    <Route path="/" element={<Welcome/>}/>
                    <Route path="/view" element={<ViewInvoices/>}/>
                    <Route path="/edit" element={<EditInvoices/>}/>
                    <Route path="/delete" element={<DeleteInvoices/>}/>
                    <Route path="/add" element={<AddInvoice/>}/>
                </Routes>
            </CardBody>
        </CardContainer>
    );
}

export default TableCard;
