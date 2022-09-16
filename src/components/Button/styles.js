import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

export const Button = styled.button`
  width: ${(props) => props.width || "100%"};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.type === "submit" ? "0.5rem 1rem" : "0")};
  border-radius: 1rem;
  border: none;
  background-color: ${(props) =>
    props.type === "submit" ? colors.gray.medium : "transparent"};
  ${typography.text.sm}
  cursor: pointer;
  color: ${(props) =>
    props.type === "submit" ? colors.white : colors.gray.medium};
  font-weight: 700;
`;
