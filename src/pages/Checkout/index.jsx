//Components
import Header from "../../components/Header";
import Button from "../../components/Button";

//Style
import { FormCheckout } from "./styles";
const Checkout = () => {
  return (
    <div className="h-100">
      <Header />
      <div className="container mt-4">
        <div className="row">
          <FormCheckout>
            <div className="col-6">
              <span className="section__title">Dados de entrega</span>
              <div className="row mb-3">
                <div className="col-12">
                  <input
                    type="text"
                    placeholder="CEP"
                    className="form-control form-control-lg"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-9">
                  <input
                    type="text"
                    placeholder="Cidade"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="col-3 pl-0">
                  <input
                    type="text"
                    placeholder="UF"
                    className="form-control form-control-lg"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-9">
                  <input
                    type="text"
                    placeholder="Logradouro"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="text"
                    placeholder="Número"
                    className="form-control form-control-lg"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-5 pl-0">
                  <input
                    type="text"
                    placeholder="Bairro"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="col-7 pl-0">
                  <input
                    type="text"
                    placeholder="Complemento"
                    className="form-control form-control-lg"
                  />
                </div>
              </div>

              <span className="section__title">Dados de pagamento</span>
              <div className="row mb-3">
                <div className="col-12">
                  <input
                    type="text"
                    placeholder="Número do cartão"
                    className="form-control form-control-lg"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="Validade"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="col-6 pl-0">
                  <input
                    type="text"
                    placeholder="CVV"
                    className="form-control form-control-lg"
                  />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-12 total">
                  <b>Total</b>
                  <h3>R$ 15,50</h3>
                </div>
              </div>
              <div className="col-12">
                <Button>Finalizar Compra</Button>
              </div>
            </div>
          </FormCheckout>
          <div className="col-6">
            <div className="box col mb-4">
              <h5>Minha Sacola (5)</h5>

              <div className="row products"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
