//Image
import ImgLogo from "../../assets/logoletrasallpet.png";
import Logo from "../../assets/logoallpet.png";

//Style
import { HeaderStyle } from "./styles";
const Header = ({ whiteVersion }) => {
  return (
    <div className="col-12">
      <header className="py-4 px-4">
        <HeaderStyle>
          <img
            src={whiteVersion ? ImgLogo : Logo}
            alt="AllPet"
            className="img-fluid"
          />
        </HeaderStyle>
      </header>
    </div>
  );
};

export default Header;
