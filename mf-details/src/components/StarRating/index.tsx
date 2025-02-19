import { FaStar, FaRegStar } from "react-icons/fa6";
import { MovieRate } from "./styles/styled";

interface StarRatingProps {
  rating: number;
}

export default function StarRating({ rating }: StarRatingProps) {
  const numStars = Math.round(rating / 2);
  const fullStars = Array(numStars).fill(0);
  const emptyStars = Array(5 - numStars).fill(0);

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
