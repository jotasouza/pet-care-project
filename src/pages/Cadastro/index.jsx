//Components
import Header from "../../components/Header";
import FormCadastro from "../../components/Form";

//Image
import IllustrationOne from "../../assets/ilustracao1.png";

const Cadastro = () => {
  return (
    <div className="container-fluid h-100 bg__primary">
      <Header whiteVersion />
      <div className="row">
        <div className="col-5 text-right my-auto ms-5">
          <img src={IllustrationOne} alt="Ilustração" className="img-fluid" />
        </div>
        <div className="col-6">
          <FormCadastro />
        </div>
      </div>
    </div>
  );
};
export default Cadastro;
