import { useState } from "react";
import Button from "./Button/button";
import Input from "./Input/input";
import { Form } from "./styles";
import { useAuth } from "../context/auth-context";
const SignupForm = ({ onClick }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });
  const { signup } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(formData);
    signup(formData);
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
      <Input
        name="first_name"
        placeholder="Ash"
        value={formData.first_name}
        onChange={handleChange}
        label="First Name"
      />
      <Input
        name="last_name"
        placeholder="Ketchum"
        value={formData.last_name}
        onChange={handleChange}
        label="Last Name"
      />
      <Button type="submit" name="Create Account" />
      <Button type="button" onClick={handleClick} name="Log in" />
    </Form>
  );
};

export default SignupForm;
