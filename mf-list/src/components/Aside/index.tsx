import { MdExitToApp, MdOutlineMovieFilter } from "react-icons/md";
import {
  ContainerSC,
  HeaderSC,
  MenuContainerSC,
  MenuIntemLinkExitSC,
  MenuIntemLinkSC,
  TitleSC,
} from "./Styles/styled";
import { IoMdMenu } from "react-icons/io";

export default function Aside() {
  return (
    <ContainerSC>
      <HeaderSC>
        <TitleSC>Menu</TitleSC>
        <IoMdMenu size={24} />
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
