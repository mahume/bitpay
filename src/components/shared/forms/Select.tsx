import styled from "styled-components";
import {ReactNode, SelectHTMLAttributes} from "react";

const StyledSelect = styled.select`
  height: 75px;
  width: 105px;
  font-size: 20px;
  padding: 10px;
  font-weight: 600; 
  margin-top: 7px;
`;

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    children?: ReactNode;
}
const Select = ({children, ...props}: Props) => {
    return (
        <StyledSelect {...props}>
            {children}
        </StyledSelect>
    );
};

export default Select;
