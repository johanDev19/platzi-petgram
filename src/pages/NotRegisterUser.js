import React, { Fragment } from "react";

import Context from "./../Context";
import { UserForm } from "./../components/UserForm";
import { RegisterMutation } from "./../container/RegisterMutation";
import { LoginMutation } from "../container/LoginMutation";

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

                register({ variables }).then(() => {
                  activateAuth()
                })
              };

              const errorMessage = error && 'El usuario ya existe o hay algún tipo de error'

              return <UserForm disabled={loading} error={errorMessage} onSubmit={onSubmit} title="Registrarse" />;
            }}
          </RegisterMutation>
          <LoginMutation>
            {
              (login, {data, loading, error}) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password };
                  const variables = { input };

                  login({ variables }).then(() => {
                    activateAuth()
                  })
                };

                const errorMessage = error && 'La contraseña no es correcta o el usuario no existe'

                return <UserForm disabled={loading} error={errorMessage} onSubmit={onSubmit} title="Iniciar sesión" />
              }
            }
          </LoginMutation>
        </Fragment>
      );
    }}
  </Context.Consumer>
);
