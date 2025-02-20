import { FaStar, FaRegStar } from "react-icons/fa6";
import { MovieRate } from "./styles/styled";
import useStarRating from "./hooks/useStarRating";

interface IProps {
  rating: number;
}
export default function StarRating({ rating }: IProps) {
  const { emptyStars, fullStars } = useStarRating(rating);

  return (
    <MovieRate>
      {fullStars.map((index) => (
        <FaStar key={index} />
      ))}

      {emptyStars.map((index) => (
        <FaRegStar key={index} />
      ))}
    </MovieRate>
  );
}
