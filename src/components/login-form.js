import { useState } from "react";
import Button from "./Button/button";
import Input from "./Input/input";
import { Form } from "./styles";
import { useAuth } from "../context/auth-context";

const LoginForm = ({ onClick }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(formData);
    login(formData);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleClick() {
    onClick();
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        name="email"
        placeholder="example@mail.com"
        value={formData.email}
        onChange={handleChange}
        label="Email"
      />
      <Input
        type="password"
        name="password"
        placeholder="*******"
        value={formData.password}
        onChange={handleChange}
        label="Password"
      />
      <Button type="submit" name="Login" />
      <Button type="button" onClick={handleClick} name="Create Account" />
    </Form>
  );
};

export default LoginForm;
