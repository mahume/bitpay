import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #2240C4;
  color: #FFF;
  cursor: pointer;
  border: 2px solid #2240C4;
  border-radius: 6px;
  height: 60px;
  min-width: 162px;
  padding: 17px 26px;
  font-weight: 700;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
  margin-right: 20px;
  transition: transform 300ms ease; 


  &:disabled {
    pointer-events: none;
    opacity: .5;
    box-shadow: none;
  }

  &:hover, &:focus {
    background-color: #2a50f5;
    border: 2px solid #2a50f5;

    transform: translateY(-3px);
    transition: transform 300ms ease; 
  }
`;

interface Props {
    text: string;
    onClick: () => void;
    isDisabled?: boolean;
    isVisible?: boolean;
}

const PrimaryButton = ({text, onClick, isDisabled, isVisible = true}: Props) =>
    isVisible ? (
        <StyledButton onClick={onClick} disabled={isDisabled}>{text}</StyledButton>
    ) : null;

export default PrimaryButton;
