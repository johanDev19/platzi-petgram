import React from "react";
import { Router } from '@reach/router' 

import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";
import { Logo } from "./components/Logo";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
      </Router>
    </>
  );
};
