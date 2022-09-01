import {ReactNode} from "react";
import styled from "styled-components";

const StyledTableHead = styled.thead`
  width: 100%;
  margin-bottom: 20px;
`;

interface Props {
    children?: ReactNode
}

const TableHead = ({children}: Props) => (
    <StyledTableHead>
        {children}
    </StyledTableHead>
)

export default TableHead;
