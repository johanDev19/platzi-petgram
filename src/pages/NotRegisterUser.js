import React, { Fragment, useContext } from "react";

import { Context } from "./../Context";
import { UserForm } from "./../components/UserForm";
import { RegisterMutation } from "./../container/RegisterMutation";
import { LoginMutation } from "../container/LoginMutation";

export const NotRegisterUser = ({ children }) => {
  const { activateAuth } = useContext(Context);

  return (
    <Fragment>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };

            register({ variables }).then((response) => {
              const {
                data: { signup },
              } = response;

              activateAuth(signup);
            });
          };

          const errorMessage =
            error && "El usuario ya existe o hay algún tipo de error";

          return (
            <UserForm
              disabled={loading}
              error={errorMessage}
              onSubmit={onSubmit}
              title="Registrarse"
            />
          );
        }}
      </RegisterMutation>
      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };

            login({ variables }).then((response) => {
              const {
                data: { login },
              } = response;

              activateAuth(login);
            });
          };

          const errorMessage =
            error && "La contraseña no es correcta o el usuario no existe";

          return (
            <UserForm
              disabled={loading}
              error={errorMessage}
              onSubmit={onSubmit}
              title="Iniciar sesión"
            />
          );
        }}
      </LoginMutation>
    </Fragment>
  );
};
