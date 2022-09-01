import styled from "styled-components";
import {ReactComponent as CheckedIcon} from "../../../assets/svgs/checkbox-checked.svg"
import {ReactComponent as UncheckedIcon} from "../../../assets/svgs/checkbox-unchecked.svg"

const StyledCheckedIcon = styled(CheckedIcon)`
  height: 24px;
  width: 24px;
`
const StyledUncheckedIcon = styled(UncheckedIcon)`
  height: 24px;
  width: 24px;
`;

interface Props {
    id: string;
    onClick: (id: string) => void;
    isChecked: boolean;
}

const Checkbox = ({id, onClick, isChecked}: Props) => {
    const handleClick = () => {
        onClick(id);
    };

    return (
        <div>
            <label>
                {isChecked
                    ? <StyledCheckedIcon onClick={handleClick}/>
                    : <StyledUncheckedIcon onClick={handleClick}/>
                }
            </label>
        </div>
    )
};

export default Checkbox;
