import {LabelHTMLAttributes, ReactNode} from "react";
import styled from "styled-components";

const StyledLabel = styled.label``;

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
    children?: ReactNode;
}

const Label = ({children, ...props}: Props) => {
    return (
        <StyledLabel {...props}>
            {children}
        </StyledLabel>
    );
}

export default Label;
