import styled from "styled-components";

export const ButtonStyle = styled.div`
  background: ${(props) => (props.greenSchema ? "#008238" : "#FF6100")};
  border-radius: 5px;
  text-align: center;
  cursor: pointer;

  &:hover {
    filter: brightness(85%);
  }

  .btn {
    font-size: 1em;
    font-weight: 500;
    color: var(--color-fourth);
  }
`;
