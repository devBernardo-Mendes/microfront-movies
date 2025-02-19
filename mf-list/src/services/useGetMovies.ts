import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function useGetMovies() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  

  const getMovie = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing",
        {
          params: {
            api_key: "773d8153588fbfa77134545c40c8f569",
            language: "pt-BR",
          },
        }
      );

      setData(response.data.results);
    } catch (err) {
      console.error("Erro ao buscar filmes:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return {
    data,
    isLoading,
  };
}
