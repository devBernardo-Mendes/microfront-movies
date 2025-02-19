import styled from "styled-components";
export const ContainerSC = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f4f4f4;
`;

export const FormSC = styled.form`
  width: 350px;
  padding: 30px;

  border: 10px;
  background-color: #e0e0e0;
`;

export const TitleSC = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const LogoSC = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  > h2 {
    color: #000000;
  }
`;
