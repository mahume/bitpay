import styled from "styled-components";
import HomeIcon from "../navigation/HomeIcon";
import NavLinks from "../navigation/NavLinks";

const StyledNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100px;
`;

const CardHeader = () => (
    <StyledNavContainer>
        <HomeIcon />
        <NavLinks/>
    </StyledNavContainer>
);

export default CardHeader;
