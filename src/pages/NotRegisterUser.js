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
            {( register, {data, loading, error} ) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password };
                const variables = { input };
                console.log("registrando");
                register({ variables }).then(() => {
                  activateAuth()
                })
              };

              const errorMessage = error && 'El usuario ya existe o hay algún tipo de error'

              return <UserForm disabled={loading} error={errorMessage} onSubmit={onSubmit} title="Registrarse" />;
            }}
          </RegisterMutation>
          <UserForm onSubmit={activateAuth} title="Iniciar sesión" />
        </Fragment>
      );
    }}
  </Context.Consumer>
);
