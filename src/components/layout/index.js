import React from 'react';
import Helmet from 'react-helmet';
import Header from '../header';

import '../../../sass/style.scss';

const Layout = ({ children }) => (
<div id="layout">
  <Helmet>
    <title>Bukwild FED Challenge - Tianhe Yang</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
  </Helmet>
  <Header />
  {children}
</div>
)
export default Layout
