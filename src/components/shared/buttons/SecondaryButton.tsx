import styled from "styled-components";

const StyledButton = styled.button`
  color: #2240C4;
  background-color: #FFF;
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

  &:hover {
    background-color: #eff1fe;
  }
`;

interface Props {
    text: string;
    onClick: () => void;
    isVisible?: boolean;
}

const SecondaryButton = ({text, onClick, isVisible = true}: Props) =>
    isVisible ? (
        <StyledButton onClick={onClick}>{text}</StyledButton>
    ) : null;

export default SecondaryButton;
