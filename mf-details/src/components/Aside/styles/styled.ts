import styled from "styled-components";

export const ContainerSC = styled.div`
  grid-area: AS;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 0.063rem solid #bfbfbf;
  padding-left: 20px;
  background-color: #f4f4f4;
  height: 100vh;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeaderSC = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 20px;
  background-color: #f8f9fa;
  border-bottom: 2px solid #ddd;

  @media (max-width: 768px) {
    padding: 0 10px;
    height: 60px;
  }
`;

export const TitleSC = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const LogImgSC = styled.img`
  height: 40px;
  width: 40px;

  @media (max-width: 768px) {
    height: 30px;
    width: 30px;
  }
`;

export const MenuContainerSC = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

export const MenuIntemLinkSC = styled.a`
  color: #000000;
  text-decoration: none;
  margin: 7px 0;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 20px;
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const MenuIntemLinkExitSC = styled.a`
  color: #000000;
  text-decoration: none;
  margin: 7px 0;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  margin-top: auto;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 20px;
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
