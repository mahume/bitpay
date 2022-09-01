import {CSSProperties} from "react";
import styled from "styled-components";

const StyledParagraph = styled.p<ParagraphProps>`
  margin: 0;
  font-family: 'Heebo', sans-serif;
  color: ${props => props.color};
  font-weight: ${props => props.weight};
  font-size: ${props => props.size};
  ${props => props.spacing && `letter-spacing: ${props.spacing}`}
  ${props => props.height && `line-height: ${props.height}`}
`;

interface ParagraphProps {
    size?: CSSProperties["fontSize"];
    weight?: CSSProperties["fontWeight"];
    color?: CSSProperties["color"];
    spacing?: CSSProperties["letterSpacing"];
    height?: CSSProperties["lineHeight"];
}

interface Props extends ParagraphProps {
    text: string;
}

const Paragraph = ({text, size = "24px", weight = 600, color = "#212529", ...props}: Props) => (
    <StyledParagraph size={size} weight={weight} color={color} {...props}>
        {text}
    </StyledParagraph>
)

export default Paragraph;
