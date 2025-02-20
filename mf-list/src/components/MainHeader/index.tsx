import useList from "../../hooks/useList";
import {
  ContainerSC,
  ProfileSC,
  TitleSC,
  UserNameSC,
  WelcomeSC,
} from "./styles/styled";

export default function MainHeader() {
  const { getUserName } = useList();

  return (
    <ContainerSC>
      <TitleSC>BuscaCine</TitleSC>

      <ProfileSC>
        <WelcomeSC>Olá, </WelcomeSC>
        <UserNameSC>{getUserName.name}</UserNameSC>
      </ProfileSC>
    </ContainerSC>
  );
}
