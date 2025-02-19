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

interface Genre {
  id: number;
  name: string;
}

interface IProps {
  movie: {
    poster_path: string;
    title: string;
    overview: string;
    vote_average: number;
    genres: Genre[];
    runtime: number;
  };
}

export default function CardDetails({ movie }: IProps) {
  if (!movie || !movie.genres) {
    return <p>Carregando...</p>;
  }

  const formatRuntime = (runtime: number) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}min`;
  };

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
