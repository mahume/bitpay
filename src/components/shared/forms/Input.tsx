import {InputHTMLAttributes, ReactNode} from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 375px;
  height: 50px;
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 7px;
  
  &:focus {
    background-color: #fafbff;
  }
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    children?: ReactNode;
}

const Input = ({children, ...props}: Props) => {
    return (
        <StyledInput {...props}>
            {children}
        </StyledInput>
    );
}

export default Input;
