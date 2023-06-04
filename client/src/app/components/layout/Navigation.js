import { Fragment } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavbarText, Nav, NavItem, NavLink } from 'reactstrap';
import { UserContextNavigation } from '../auth';

const routes = [
  {
    title: 'Communities',
    type: 'internal',
    path: '/communities'
  },
  {
    title: 'Posts',
    type: 'internal',
    path: '/posts'
  },
  {
    title: 'Programme',
    type: 'internal',
    path: '/programme'
  },
  {
    title: 'Opleiding',
    type: 'internal',
    path: '/opleiding'
  }
];

const Navigation = () => {
  return (
    <>
      <Nav
        className="me-auto"
        navbar
      >
        {routes && routes.map(route => 
          <NavItem key={route.path}>
            <NavLink tag={RRNavLink} to={route.path}>
              {route.title}
            </NavLink>
          </NavItem>
        )}
      </Nav>
      <Nav>
        <UserContextNavigation/>
      </Nav>
    </>
  )
};

export default Navigation;