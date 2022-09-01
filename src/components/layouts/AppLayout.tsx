import {ReactNode} from "react";
import styled from "styled-components";
import background from "../../assets/svgs/bitpay-pattern-slant.svg";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

interface Props {
    children?: ReactNode;
}

const AppLayout = ({children}: Props) => (
    <StyledDiv>
        {children}
    </StyledDiv>
);

export default AppLayout;
