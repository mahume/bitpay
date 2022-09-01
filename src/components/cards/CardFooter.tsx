import {ReactNode} from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

interface Props {
    children?: ReactNode;
}

const CardFooter = ({children}: Props) => {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    );
};

export default CardFooter;
