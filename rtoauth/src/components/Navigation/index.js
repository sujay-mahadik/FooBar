import React from 'react';
import { Link } from 'gatsby';

import { AuthUserContext, withAuthentication } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

// Author: Sujay
import { Navbar, Alignment, Button } from "@blueprintjs/core";
//import "~normalize.css";
import "../../../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../../../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    {authUser.roles.includes(ROLES.ADMIN) && (
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    )}
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <Navbar >
    <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Musafir Admin Website</Navbar.Heading>
        <Navbar.Divider />
        <Link to={ROUTES.LANDING}>
          <Button className="bp3-minimal" icon="home" text="Landing"/>
        </Link>
        <Link to={ROUTES.SIGN_IN}>
          <Button className="bp3-minimal" icon="log-in" text="Sign In"/>
        </Link>
    </Navbar.Group>
</Navbar>

  // <ul>
  //   <li>
  //     <Link to={ROUTES.LANDING}>Landing</Link>
  //   </li>
  //   <li>
  //     <Link to={ROUTES.SIGN_IN}>Sign In</Link>
  //   </li>
  // </ul>

);

export default Navigation;
