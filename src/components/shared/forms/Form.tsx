import {ReactNode} from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

interface Props {
    children?: ReactNode;
}

const Form = ({children}: Props) => {
    return <StyledForm>
        {children}
    </StyledForm>
}

export default Form;
