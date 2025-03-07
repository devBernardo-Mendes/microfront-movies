import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

html, body, #rooot {
    height: 100%;
}

*, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
}

button {
    cursor: pointer;
}

@media (max-width: 768px) {
  body {
    padding: 10px;
  }
}
`;
