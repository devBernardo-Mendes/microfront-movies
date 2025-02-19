import { MdExitToApp, MdOutlineMovieFilter } from "react-icons/md";
import {
  ContainerSC,
  HeaderSC,
  MenuContainerSC,
  MenuIntemLinkExitSC,
  MenuIntemLinkSC,
  TitleSC,
} from "./styles/styled";

export default function Aside() {
  return (
    <ContainerSC>
      <HeaderSC>
        <TitleSC>Menu</TitleSC>
      </HeaderSC>

      <MenuContainerSC>
        <MenuIntemLinkSC href="/list">
          <MdOutlineMovieFilter />
          Lista de Filmes
        </MenuIntemLinkSC>
      </MenuContainerSC>
      <MenuIntemLinkExitSC href="/auth">
        <MdExitToApp />
        Sair
      </MenuIntemLinkExitSC>
    </ContainerSC>
  );
}
