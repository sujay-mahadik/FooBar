import React, { Fragment } from 'react';

import Layout from '../components/layout';

//Author: Sujay
import { Button, Card, Elevation } from "@blueprintjs/core";

const LandingPage = () => (
  <Card elevation={Elevation.TWO}>
    <h2>Landing Page</h2>
    <p>
      The Landing Page is open to everyone, even though the user isn't signed in.
    </p>
  </Card>
  // <Fragment>
  //   <h1>Landing</h1>
  //   <p>
  //     The Landing Page is open to everyone, even though the user isn't
  //     signed in.
  //   </p>
  // </Fragment>
);

export default () => (
  <Layout>
    <LandingPage />
  </Layout>
);
