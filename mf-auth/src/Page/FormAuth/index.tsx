import Button from "../../components/Button";
import Input from "../../components/Input";
import useAuth from "../../hooks/useAuth";
import { ContainerSC, FormSC, TitleSC } from "./styles/styled";

export default function FormAuth() {
  const {
    handleSubmit,
    setEmail,
    setPassword,
    email,
    password,
    setUser,
    user,
    confirmPassword,
    setConfirmPassword,
    error,
  } = useAuth();
  return (
    <ContainerSC>
      <FormSC onSubmit={handleSubmit}>
        <TitleSC>Entrar</TitleSC>
        <Input
          placeholder="Nome"
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
          placeholder="Confirma Senha"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
        <Button type="submit"> Acessar</Button>
      </FormSC>
    </ContainerSC>
  );
}
