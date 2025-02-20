import {
  Container,
  Content,
  Description,
  ImageContainer,
  TextContainer,
  Title,
} from "./Styles/styles";
import emptySearch from "../../assets/emptySearch2.svg";

export default function NoResult() {
  return (
    <Container>
      <Content>
        <ImageContainer>
          <img src={emptySearch} alt="No Results" loading="lazy" />
        </ImageContainer>
        <TextContainer>
          <Title>Nenhum Resultado Encontrado</Title>
          <Description>
            Infelizmente não encontramos o que você estava procurando
          </Description>
        </TextContainer>
      </Content>
    </Container>
  );
}
