export default function useStarRating(rating: number) {
  const numStars = Math.round(rating / 2);
  const fullStars = Array(numStars).fill(0);
  const emptyStars = Array(5 - numStars).fill(0);

  return { fullStars, emptyStars };
}
