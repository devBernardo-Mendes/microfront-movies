import { useNavigate } from "react-router-dom";

export default function useList() {
  const navigate = useNavigate();
  const getUserName = JSON.parse(localStorage.getItem("user_auth") || '""');

  const redirectToDetails = (id: number) => {
    navigate(`/details/${id}`);
  };

  return {
    getUserName,
    redirectToDetails,
  };
}
