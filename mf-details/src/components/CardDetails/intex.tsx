import { IMovie } from "../../hooks/types";
import useDetails from "../../hooks/useDetails";
import StarRating from "../StarRating";
import {
  Container,
  ContentOverview,
  GenreList,
  MovieContainer,
  MovieInfo,
  MoviePoster,
  MovieTitle,
  Overview,
  OverviewTitle,
  Runtime,
} from "./styles/styled";

export default function CardDetails({ movie }: IMovie) {
  const { formatRuntime } = useDetails();
  if (!movie || !movie.genres) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <MovieContainer>
        <MovieInfo>
          <MoviePoster
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <ContentOverview>
            <MovieTitle>{movie.title}</MovieTitle>
            <OverviewTitle>Sinopse:</OverviewTitle>
            <Overview>{movie.overview}</Overview>

            <OverviewTitle>Gêneros:</OverviewTitle>
            <GenreList>
              {movie.genres.length > 0
                ? movie.genres.map((genre) => genre.name).join(", ")
                : "Não informado"}
            </GenreList>

            <OverviewTitle>Duração:</OverviewTitle>
            <Runtime>
              {movie.runtime ? formatRuntime(movie.runtime) : "Não informado"}
            </Runtime>
            <OverviewTitle>Avaliação:</OverviewTitle>
            <StarRating rating={movie.vote_average} />
          </ContentOverview>
        </MovieInfo>
      </MovieContainer>
    </Container>
  );
}
