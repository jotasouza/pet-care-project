//Style
import { ButtonStyle } from "./styles";

const Button = ({ children }) => {
  return (
    <ButtonStyle>
      <button className="btn btn-lg btn-block">{children}</button>
    </ButtonStyle>
  );
};

export default Button;
