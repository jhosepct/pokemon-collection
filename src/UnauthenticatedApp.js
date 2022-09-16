import styled from "@emotion/styled";
import { useState } from "react";
import LoginForm from "./components/login-form";
import SignupForm from "./components/signup-form";
import { colors, typography } from "./styles";

const Wrapper = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  width: 225px;
  text-align: center;
  color: ${colors.black};
  ${typography.head.sm};
  font-weight: 700;
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 96px 0 48px 0;
`;

const UnauthenticatedApp = () => {
  const [showLogin, setShowLogin] = useState(true);
  function handleClick(event) {
    // event.preventDefault();
    setShowLogin(!showLogin);
  }
  return (
    <Wrapper>
      <Title>Welcome to Poke Colection</Title>
      {showLogin ? (
        <LoginForm onClick={handleClick} />
      ) : (
        <SignupForm onClick={handleClick} />
      )}
    </Wrapper>
  );
};

export default UnauthenticatedApp;
