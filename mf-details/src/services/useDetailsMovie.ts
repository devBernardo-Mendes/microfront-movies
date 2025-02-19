import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function useDetailsMovie() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { id } = useParams<{ id: string }>();

  const getDetailsMovie = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}`,
        {
          params: {
            api_key: "773d8153588fbfa77134545c40c8f569",
            language: "pt-BR",
          },
        }
      );

      setData(response.data);
    } catch (err) {
      console.error("Erro ao buscar filme:", err);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getDetailsMovie();
  }, [getDetailsMovie]);

  return {
    data,
    isLoading,
  };
}
