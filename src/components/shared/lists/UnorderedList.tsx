import styled from "styled-components";
import {CSSProperties, ReactNode} from "react";

const StyledUnorderedList = styled.ul<Props>`
  list-style: none;
  display: flex;
  flex-direction: ${props => props.direction};
  margin-top: 5px;
`;

interface Props {
    children?: ReactNode;
    direction: CSSProperties["flexDirection"];
}

const UnorderedList = ({children, direction = "row"}: Props) => (
    <StyledUnorderedList direction={direction}>{children}</StyledUnorderedList>
);

export default UnorderedList;
