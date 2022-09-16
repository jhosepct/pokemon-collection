import * as Styled from "./styles";

function Button(props) {
  const { name, type } = props;
  return (
    <Styled.Button {...props} type={type}>
      {name}
    </Styled.Button>
  );
}

export default Button;
