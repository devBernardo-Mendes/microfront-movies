interface Genre {
  id: number;
  name: string;
}

export interface IMovie {
  movie: {
    poster_path: string;
    title: string;
    overview: string;
    vote_average: number;
    genres: Genre[];
    runtime: number;
  };
}
