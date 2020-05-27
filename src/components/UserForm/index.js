import React, { Fragment } from "react";

import { useInputValue } from "./../../hooks/useInputValue";
import { Form, Input, Button, Title, Error } from "./styles";

export const UserForm = ({ disabled, onSubmit, title, error }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} type="text" placeholder="Email" {...email} />
        <Input
          type="text"
          placeholder="Password"
          type="password"
          disabled={disabled}
          {...password}
        />
        <Button disabled={disabled}>Iniciar sesión</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  );
};
