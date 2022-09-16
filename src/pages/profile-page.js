import styled from "@emotion/styled";
import ProfileForm from "../components/profile-form";
import { colors, typography } from "../styles";

const Wrapper = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  max-height: calc(100vh - 67px);
`;

const Title = styled.p`
  width: 225px;
  text-align: center;
  color: ${colors.black};
  ${typography.head.sm};
  font-weight: 700;
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 112px 0 48px 0;
`;

function Profile() {
  return (
    <Wrapper>
      <Title>Profile</Title>
      <ProfileForm />
    </Wrapper>
  );
}

export default Profile;
