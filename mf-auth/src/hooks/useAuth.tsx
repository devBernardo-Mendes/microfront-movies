import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSigIn } from "../services/useSigIn";

export default function useAuth() {
  const { login } = useSigIn();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const username = user;
    login(username);
    navigate("/");
  };

  return {
    setEmail,
    setPassword,
    setUser,
    handleSubmit,
    user,
    email,
    password,
  };
}
