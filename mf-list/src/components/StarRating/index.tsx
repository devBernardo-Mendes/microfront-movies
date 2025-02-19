import { FaStar, FaRegStar } from "react-icons/fa6";
import { MovieRate } from "./styles/styled";

interface IProps {
  rating: number;
}
export default function StarRating({ rating }: IProps) {
  const numStars = Math.round(rating / 2);
  const fullStars = [];
  const emptyStars = [];

  for (let i = 0; i < 5; i++) {
    if (i < numStars) {
      fullStars.push(i);
    } else {
      emptyStars.push(i);
    }
  }

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
