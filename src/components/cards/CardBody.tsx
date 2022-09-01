import {ReactNode} from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  
  flex: 1;
    display: flex;
    flex-direction: column;
`;

interface Props {
    children?: ReactNode;
}

const CardBody = ({ children }: Props) => {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    );
};

export default CardBody;
