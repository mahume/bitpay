import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import PrimaryButton from "../shared/buttons/PrimaryButton";
import Paragraph from "../shared/texts/Paragraph";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60%;
`;

const ButtonContainer = styled.div`
  padding-top: 40px
`;

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <StyledContainer>
            <Paragraph text="Welcome to the Invoice Manager" size="36px" weight={600}/>
            <ButtonContainer>
                <PrimaryButton text="View Invoices" onClick={() => navigate('/view')}/>
            </ButtonContainer>
        </StyledContainer>
    );
}

export default Welcome;
