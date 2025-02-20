import { useNavigate } from "react-router-dom";

export default function useList() {
  const navigate = useNavigate();
  const getUserName = JSON.parse(localStorage.getItem("user_auth") || '""');

  const redirectToDetails = (id: number) => {
    navigate(`/details/${id}`);
  };

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date?.toLocaleDateString("pt-BR");
  }

  return {
    getUserName,
    redirectToDetails,
    formatDate,
  };
}
