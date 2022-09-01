import {CSSProperties, ReactNode} from "react";
import styled from "styled-components";

const StyledTableCell = styled.td<Props>`
  flex: ${(props) => props.flex || "1"};
  text-align: ${(props) => props.textAlign || "left"};
  margin: 0 10px;
`;

interface Props {
    children?: ReactNode;
    flex?: CSSProperties['flex'];
    textAlign?: CSSProperties['textAlign'];
}

const TableCell = ({children, flex, textAlign}: Props) => (
    <StyledTableCell flex={flex} textAlign={textAlign}>
        {children}
    </StyledTableCell>
)

export default TableCell;
