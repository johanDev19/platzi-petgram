import React, { Fragment } from "react";
import { Router } from "@reach/router";

import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";
import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";
import { GlobalStyle } from "./styles/GlobalStyles";

import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { User } from "./pages/User";
import { NotRegisterUser } from "./pages/NotRegisterUser";
import { Favs } from "./pages/Favs";
import Context from "./Context";

export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search);

  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
      </Router>

      <Context.Consumer>
          {({ isAuth }) =>
            isAuth ? (
              <Router>
                <Favs path="/favs" />
                <User path="/user" />
              </Router>
            ) : (
              <Router>
                <NotRegisterUser path="/favs" />
                <NotRegisterUser path="/user" />
              </Router>
            )
          }
        </Context.Consumer>
      <NavBar />
    </>
  );
};
