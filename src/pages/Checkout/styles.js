import styled from "styled-components";

export const FormCheckout = styled.div`
  width: 70%;
  span {
    padding-bottom: 7px;
    margin: 20px 0;
    display: inline-block;

    border-bottom: 2px solid var(--color-primary);
  }

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
