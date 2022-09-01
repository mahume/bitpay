import {CSSProperties} from "react";
import UnorderedList from "../shared/lists/UnorderedList";
import ListItem from "../shared/lists/ListItem";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import Paragraph from "../shared/texts/Paragraph";

const activeLinkStyles: CSSProperties = {
    textDecoration: "none",
};
const inactiveLinkStyles: CSSProperties = {
    textDecoration: "none",
};

const StyledHorizontalRule = styled.hr`
  color: #4F6EF7;
`;
const StyledNav = styled.nav``;

const NavLinks = () => {
    return (
        <StyledNav>
            <UnorderedList direction="row">
                <ListItem>
                    <NavLink to="edit" style={({isActive}) => isActive ? activeLinkStyles : inactiveLinkStyles}>
                        {({isActive}) => (
                            <>
                                <Paragraph
                                    text="Edit Invoices"
                                    color={isActive ? "#212529" : "#7F7F7F"}
                                    size="22px"
                                    weight={400}
                                />
                                {isActive && <StyledHorizontalRule/>}
                            </>
                        )}
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="delete" style={({isActive}) => isActive ? activeLinkStyles : inactiveLinkStyles}>
                        {({isActive}) => (
                            <>
                                <Paragraph
                                    text="Delete Invoices"
                                    color={isActive ? "#212529" : "#7F7F7F"}
                                    size="22px"
                                    weight={400}
                                />
                                {isActive && <StyledHorizontalRule/>}
                            </>
                        )}
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="add" style={({isActive}) => isActive ? activeLinkStyles : inactiveLinkStyles}>
                        {({isActive}) => (
                            <>
                                <Paragraph
                                    text="Add Invoices"
                                    color={isActive ? "#212529" : "#7F7F7F"}
                                    size="22px"
                                    weight={400}
                                />
                                {isActive && <StyledHorizontalRule/>}
                            </>
                        )}
                    </NavLink>
                </ListItem>
            </UnorderedList>
        </StyledNav>
    )
};

export default NavLinks;
