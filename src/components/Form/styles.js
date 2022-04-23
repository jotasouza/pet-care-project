import styled from "styled-components";

export const FormStyleCadastro = styled.div`
  background: var(--color-fourth);

  -webkit-box-shadow: 7px 7px 15px 1px #231d1e;
  box-shadow: 7px 7px 15px 1px #231d1e;

  border-radius: 5px;
  display: inline-block;
  padding: 25px;
  width: 460px;

  margin-left: 85px;

  h2 {
    color: var(--font-color-primary);
    text-align: center;
    margin-bottom: 1em;
    font-size: 1.5em;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="date"] {
    font-size: 15px;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="date"],
  input[type="text"] :disabled,
  input[type="email"] :disabled,
  input[type="password"] :disabled,
  input[type="date"] :disabled {
    background: #f6f5f5;
    border: 0.5px solid #dcdcdc;
    outline: none;
    color: #626264;
  }
`;
