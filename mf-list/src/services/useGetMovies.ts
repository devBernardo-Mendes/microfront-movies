import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function useGetMovies() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const getMovie = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            api_key: "773d8153588fbfa77134545c40c8f569",
            language: "pt-BR",
            query: searchTerm,
            page: 1,
          },
        }
      );

      setData(response.data.results);
    } catch (err) {
      console.error("Erro ao buscar filmes:", err);
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm) {
      getMovie();
    } else {
      getMovie();
    }
  }, [getMovie, searchTerm]);

  return {
    data,
    isLoading,
    handleSearchChange,
    searchTerm,
  };
}
