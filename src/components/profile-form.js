import { useState } from "react";
import { useAuth } from "../context/auth-context";
import Button from "./Button/button";
import Input from "./Input/input";
import { Form } from "./styles";

const ProfileForm = () => {
  const { user, logout } = useAuth();

  const [formData, setFormData] = useState({
    email: user.email,
    password: user,
    first_name: user.first_name,
    last_name: user.last_name,
  });
  const { update } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(formData);
    update(formData);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
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
      <Button type="submit" name="Update" />
      <Button type="button" name="Logout" onClick={logout} />
    </Form>
  );
};

export default ProfileForm;
