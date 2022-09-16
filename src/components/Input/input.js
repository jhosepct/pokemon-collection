import * as Styled from "./styles";

function Input({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
}) {
  return (
    <Styled.Wrapper>
      {label && <Styled.Label htmlFor={id || name}>{label}</Styled.Label>}
      <Styled.Input
        type={type}
        name={name}
        id={id || name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Styled.Wrapper>
  );
}

export default Input;
