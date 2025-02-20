export default function useStarRating(rating: number) {
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

  return {
    fullStars,
    emptyStars,
  };
}
