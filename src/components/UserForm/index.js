import React, { Fragment } from "react";

import { useInputValue } from "./../../hooks/useInputValue";
import { Form, Input, Title, Error } from "./styles";
import { SubmitButton } from "./../SubmitButton";
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
        <SubmitButton>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  );
};
