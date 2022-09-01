import {ReactNode} from "react";
import styled from "styled-components";

const StyledTableBody = styled.tbody`
  width: 100%;
  height: 400px;
  overflow-y: auto;
`;

interface Props {
    children?: ReactNode
}

const TableBody = ({children}: Props) => (
    <StyledTableBody>
        {children}
    </StyledTableBody>
)

export default TableBody;
