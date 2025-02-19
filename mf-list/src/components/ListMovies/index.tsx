import useGetMovies from "../../services/useGetMovies";
import { IMove } from "../../hooks/types";
import { ListUl } from "./Styles/styled";
import MovieCard from "../MovieCard";

export default function ListMovies() {
  const { data } = useGetMovies();

  if (!data) return null;

  return (
    <ListUl>
      {data.map((item: IMove) => (
        <MovieCard movie={item} key={item.id} />
      ))}
    </ListUl>
  );
}
