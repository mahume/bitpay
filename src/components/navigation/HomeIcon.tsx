import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as Logo} from "../../assets/svgs/bitpay-logo-blue.svg";

const BitpayLogo = styled(Logo)`
  width: 120px;
`;

const HomeIcon = () => (
    <NavLink to="/view">
        <BitpayLogo/>
    </NavLink>
);

export default HomeIcon;
