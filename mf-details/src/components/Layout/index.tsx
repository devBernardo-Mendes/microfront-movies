import { ReactNode } from "react";
import Aside from "../Aside";
import Content from "../Content";
import MainHeader from "../MainHeader";
import { ContainerSC } from "./styles/styled";

interface ILayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <ContainerSC>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </ContainerSC>
  );
}
