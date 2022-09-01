import {ReactNode} from "react";
import styled from "styled-components";

const StyledTableRow = styled.tr`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
  height: 40px;
`;

interface Props {
    children?: ReactNode
}

const TableRow = ({children}: Props) => (
    <StyledTableRow>
        {children}
    </StyledTableRow>
)

export default TableRow;
