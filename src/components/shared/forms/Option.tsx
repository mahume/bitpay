import {OptionHTMLAttributes, ReactNode} from "react";
import styled from "styled-components";

const StyledOption = styled.option``;

interface Props extends OptionHTMLAttributes<HTMLOptionElement> {
    children?: ReactNode;
}

const Option = ({children, ...props}: Props) => (
    <StyledOption {...props}>{children}</StyledOption>
)


export default Option;
