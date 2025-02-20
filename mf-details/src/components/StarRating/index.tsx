import { FaStar, FaRegStar } from "react-icons/fa6";
import { MovieRate } from "./styles/styled";
import useStarRating from "./hooks/useStarRating";

interface StarRatingProps {
  rating: number;
}

export default function StarRating({ rating }: StarRatingProps) {
  const { emptyStars, fullStars } = useStarRating(rating);

  return (
    <MovieRate>
      {fullStars.map((_, index) => (
        <FaStar key={`full-${index}`} />
      ))}
      {emptyStars.map((_, index) => (
        <FaRegStar key={`empty-${index}`} />
      ))}
    </MovieRate>
  );
}
