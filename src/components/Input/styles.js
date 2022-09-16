import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

export const Wrapper = styled.div`
  width: 258px;
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 0.25rem;
`;

export const Label = styled.label`
  ${typography.text.xs}
  color: ${colors.gray.dark};
  font-weight: 400;
`;

export const Input = styled.input`
  ${typography.text.sm}
  color: ${colors.gray.medium};
  border-radius: 1rem;
  background-color: ${colors.white};
  padding: 0.5rem;
  border: none;
  font-weight: 400;
`;
