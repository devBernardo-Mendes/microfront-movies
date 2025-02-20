import styled from "styled-components";

export const ContainerSC = styled.div`
  grid-area: MH;

  background-color: #f4f4f4;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 0.625rem;
  border-bottom: 0.063rem solid #bfbfbf;
`;

export const TitleSC = styled.h1`
  color: #222;
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  background: linear-gradient(90deg, #007bff, #00d4ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ProfileSC = styled.div`
  display: flex;
  align-items: center;
  color: #000000;
`;

export const WelcomeSC = styled.h3``;

export const UserNameSC = styled.span`
  margin-left: 5px;
  margin-right: 10px;
`;
