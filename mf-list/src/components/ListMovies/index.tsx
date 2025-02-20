import useGetMovies from "../../services/useGetMovies";
import { IMove } from "../../hooks/types";
import { Content, ListUl } from "./Styles/styled";
import MovieCard from "../MovieCard";
import Input from "../Input";
import NoResult from "../NoResults";

export default function ListMovies() {
  const { data, handleSearchChange, searchTerm } = useGetMovies();

  return (
    <>
      <Input
        name="search"
        placeholder="Pesquisar Filme"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {data && data.length > 0 && (
        <ListUl>
          {data.map((item: IMove) => (
            <MovieCard movie={item} key={item.id} />
          ))}
        </ListUl>
      )}
      {data.length === 0 && (
        <Content>
          <NoResult />
        </Content>
      )}
    </>
  );
}
