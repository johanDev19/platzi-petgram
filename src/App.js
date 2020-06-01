import React, { Fragment, useContext } from "react";
import { Router, Redirect } from "@reach/router";

import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";
import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";
import { GlobalStyle } from "./styles/GlobalStyles";

import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { User } from "./pages/User";
import { NotRegisterUser } from "./pages/NotRegisterUser";
import { Favs } from "./pages/Favs";
import { NotFound } from './pages/NotFound';
import {Context} from "./Context";

export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search);
  const { isAuth } = useContext(Context)
  

  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
        { !isAuth && (<NotRegisterUser path="login" />)}
        { !isAuth && (<Redirect from="/favs" to="/login" />)}
        { !isAuth && (<Redirect from="user" to="/login" />)}    
        { isAuth && (<Redirect from="/login" to="/" />)}    
        <Favs path="/favs" />
        <User path="/user" />
      </ Router >  
    <NavBar />
    </>
  );
};
