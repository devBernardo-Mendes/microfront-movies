import { IMove } from "../../hooks/types";
import useList from "../../hooks/useList";
import StarRating from "../StarRating";
import {
  Button,
  HidderContent,
  ImageMovie,
  Item,
  ItemLi,
  ItemTitle,
  MovieInfos,
  MoviePoster,
} from "./styles/styled";

interface IProps {
  movie: IMove;
}

export default function MovieCard({ movie }: IProps) {
  const { redirectToDetails } = useList();
  return (
    <ItemLi>
      <MoviePoster>
        <ImageMovie
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </MoviePoster>
      <MovieInfos>
        <ItemTitle>{movie.title}</ItemTitle>
        <StarRating rating={movie.vote_average} />
        <HidderContent>
          {movie.overview && (
            <Item>
              {movie.overview.length > 100
                ? `${movie.overview.substring(0, 100)}...`
                : movie.overview}
            </Item>
          )}
          <Button onClick={() => redirectToDetails(movie.id)}>Ver mais</Button>
        </HidderContent>
      </MovieInfos>
    </ItemLi>
  );
}
