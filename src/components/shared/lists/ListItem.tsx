import {ReactNode} from "react";
import styled from "styled-components";

const StyledListItem = styled.li<Props>`
  //border-bottom: ${props => props.isActive ? "2px solid #4F6EF7" : "none"};
  margin-right: 30px;
  padding-bottom: 15px;
  font-size: 20px;
  height: 50px;
`;

interface Props {
    children?: ReactNode;
    isActive?: boolean;
}

const ListItem = ({children, isActive}: Props) => (
    <StyledListItem isActive={isActive}>{children}</StyledListItem>
);

export default ListItem;
