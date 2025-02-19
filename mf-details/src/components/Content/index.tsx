import { ReactNode } from "react";
import { ContainerSC } from "./styles/styled";

interface IAsideProps {
  children?: ReactNode;
}

export default function Content({ children }: IAsideProps) {
  return <ContainerSC>{children}</ContainerSC>;
}
