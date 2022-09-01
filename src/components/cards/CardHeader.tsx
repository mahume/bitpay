import styled from "styled-components";
import HomeIcon from "../navigation/HomeIcon";

const StyledNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100px;
`;

const CardHeader = () => (
    <StyledNavContainer>
        <HomeIcon />
    </StyledNavContainer>
);

export default CardHeader;
