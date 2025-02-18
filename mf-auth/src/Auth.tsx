import Button from "./components/Button";
import Input from "./components/Input";
import useAuth from "./hooks/useAuth";
import { ContainerSC, FormSC, TitleSC } from "./styles/styled";

export default function Auth() {
  const {
    handleSubmit,
    setEmail,
    setPassword,
    email,
    password,
    setUser,
    user,
  } = useAuth();
  return (
    <ContainerSC>
      <FormSC onSubmit={handleSubmit}>
        <TitleSC>Entrar</TitleSC>
        <Input
          placeholder="Usuário"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit"> Acessar</Button>
      </FormSC>
    </ContainerSC>
  );
}
