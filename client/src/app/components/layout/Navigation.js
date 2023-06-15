import { Fragment } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { NavbarText, Nav, NavItem, NavLink } from "reactstrap";
import { UserContextNavigation } from "../auth";

const routes = [
  {
    title: "Programme",
    type: "internal",
    path: "/programme",
  },
  {
    title: "Portfolios",
    type: "internal",
    path: "/portfolios",
  },
  {
    title: "Posts",
    type: "internal",
    path: "/posts",
  },
  {
    title: "Services",
    type: "internal",
    path: "/services",
  },
  {
    title: "Teams",
    type: "internal",
    path: "/teams",
  },
];

const Navigation = () => {
  return (
    <>
      <Nav className="me-auto" navbar>
        {routes &&
          routes.map((route) => (
            <NavItem key={route.path}>
              <NavLink tag={RRNavLink} to={route.path}>
                {route.title}
              </NavLink>
            </NavItem>
          ))}
      </Nav>
      <Nav>
        <UserContextNavigation />
      </Nav>
    </>
  );
};

export default Navigation;
