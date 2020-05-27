import React, { Fragment } from "react";

import Context from "./../Context";
import { UserForm } from "./../components/UserForm";
import { RegisterMutation } from "./../container/RegisterMutation";

export const NotRegisterUser = ({ children }) => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <Fragment>
          <RegisterMutation>
            {( register ) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password };
                const variables = { input };
                console.log("registrando");
                register({ variables }).then(() => {
                  activateAuth()
                })
              };

              return <UserForm onSubmit={onSubmit} title="Registrarse" />;
            }}
          </RegisterMutation>
          <UserForm onSubmit={activateAuth} title="Iniciar sesión" />
        </Fragment>
      );
    }}
  </Context.Consumer>
);
