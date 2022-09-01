import {ReactNode} from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

interface Props {
    children?: ReactNode
}

const Table = ({children}: Props) => (
    <StyledTable>
        {children}
    </StyledTable>
)

export default Table;
