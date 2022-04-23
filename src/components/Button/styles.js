import styled from "styled-components";

export const ButtonStyle = styled.div`
  background: ${(props) => (props.greenSchema ? "#008238" : "#FF6100")};
  border-radius: 5px;
  text-align: center;
  cursor: pointer;

  span {
    color: var(--color-fourth);
    font-size: 0.8em;
    font-weight: bold;
  }

  &:hover {
    filter: brightness(85%);
  }
`;
