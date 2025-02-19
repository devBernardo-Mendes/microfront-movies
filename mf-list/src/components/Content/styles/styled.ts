import styled from "styled-components";

export const ContainerSC = styled.div`
  grid-area: CT;
  color: #000000;

  background-color: #e0e0e0;
  padding: 25px;

  height: calc(100vh - 70px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f5f5f5;
  }
`;
