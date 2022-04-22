//Image
import ImgLogo from "../../assets/logoletrasallpet.png";

//Style
import { HeaderStyleCadastro } from "./styles";
const HeaderCadastro = () => {
  return (
    <div className="col-12">
      <HeaderStyleCadastro>
        <img src={ImgLogo} alt="AllPet" />
      </HeaderStyleCadastro>
    </div>
  );
};

export default HeaderCadastro;
