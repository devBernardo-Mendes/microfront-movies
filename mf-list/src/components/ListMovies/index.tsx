import useGetMovies from "../../services/useGetMovies";
import { IMove } from "../../hooks/types";
import { Content, ListUl } from "./Styles/styled";
import MovieCard from "../MovieCard";
import Input from "../Input";
import { useState } from "react";
import NoResult from "../NoResults";

export default function ListMovies() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const { data } = useGetMovies(searchTerm);

  if (!data) return null;

  return (
    <>
      <Input
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
