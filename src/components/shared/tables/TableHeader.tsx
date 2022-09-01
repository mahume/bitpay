import styled from "styled-components";
import Paragraph from "../texts/Paragraph";
import {CSSProperties} from "react";

interface StyledTableHeaderProps {
    flex?: CSSProperties['flex'];
    textAlign?: CSSProperties['textAlign'];
}

const StyledTableHeader = styled.th<StyledTableHeaderProps>`
  flex: ${(props) => props.flex || "1"};
  text-align: ${(props) => props.textAlign || "left"};
  margin: 0 10px;
`;

interface Props extends StyledTableHeaderProps {
    text?: string;
}

const TableHeader = ({text, ...props}: Props) => (
    <StyledTableHeader {...props}>
        <Paragraph text={text ?? ""} size="18px" />
    </StyledTableHeader>
)

export default TableHeader;
