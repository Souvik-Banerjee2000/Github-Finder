import React, { useState, useContext } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav, NavItem, NavLink, NavbarText
} from "reactstrap";
import { Link } from "react-router-dom";
import {UserContext} from "../context/UserContext";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const {user,setUser} = useContext(UserContext);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand>
                <Link to="/" className="text-white">
                    Github Search Engine
                </Link>
            </NavbarBrand>
            <NavbarText className="text-white">{user?.email ? user.email : ""}</NavbarText>
            <NavbarToggler onClick={toggle} />
            <Collapse navbar isOpen={isOpen}>
                <Nav className="ml-auto" navbar>
                    {
                        user ? (
                            <NavItem>
                                <NavLink onClick = {()=>{setUser(null)}}>Logout</NavLink>
                            </NavItem>
                        ) : (
                                <>
                                    <NavItem>
                                        <NavLink className="text-white" tag={Link} to="/signup">
                                            Signup
                                </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="text-white" tag={Link} to="/signin">
                                            SignIn
                                </NavLink>
                                    </NavItem>
                                </>
                            )
                    }

                </Nav>
            </Collapse>
        </Navbar>
    )
}
export default Header;