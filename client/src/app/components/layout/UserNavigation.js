import { NavLink as RRNavLink } from "react-router-dom";
import { Button, Navbar, NavbarBrand, NavLink, Nav } from "reactstrap";
import { useAuth } from "../../context/auth.context";
import * as routes from "../../routes";

const UserNavigation = () => {
  const { signOut } = useAuth();
  return (
    <header className="header">
      <Navbar color="light" expand="md">
        <NavbarBrand tag={RRNavLink} to="/home">
          PGM Platform
        </NavbarBrand>
        <Nav>
          <NavLink tag={RRNavLink} to={routes.USER}>
            Dashboard
          </NavLink>
          <NavLink tag={RRNavLink} to={routes.USER_PROFILE}>
            My Profile
          </NavLink>
          <Button onClick={signOut}>Sign out</Button>
        </Nav>
      </Navbar>
    </header>
  );
};

export default UserNavigation;
