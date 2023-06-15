import { NavLink as RRNavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { useThemeContext } from "../../context";

// Custom components
import Navigation from "./Navigation";

const Header = () => {
  const { isDarkMode } = useThemeContext();
  return (
    <header className="header">
      <Navbar color={isDarkMode ? "light" : "dark"} expand="md">
        <NavbarBrand tag={RRNavLink} to="/home">
          PGM Platform
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Navigation />
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
