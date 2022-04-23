//Style
import { FormStyleCadastro } from "./styles";

//Component
import Button from "../Button";

const FormCadastro = () => {
  return (
    <FormStyleCadastro>
      <div className="col-12">
        <h2>Falta pouco para fazer seu pet feliz!</h2>

        <input
          type="text"
          className="form-control form-control-lg mb-3"
          placeholder="Nome completo"
        />
        <input
          type="email"
          className="form-control form-control-lg mb-3"
          placeholder="Email"
        />
        <input
          type="text"
          className="form-control form-control-lg mb-3"
          placeholder="Telefone"
        />
        <input
          type="text"
          className="form-control form-control-lg mb-3"
          placeholder="CPF"
        />
        <input
          type="date"
          className="form-control form-control-lg mb-3"
          placeholder="Data de nascimento"
        />
        <Button>Finalizar Pedido</Button>
      </div>
    </FormStyleCadastro>
  );
};

export default FormCadastro;
