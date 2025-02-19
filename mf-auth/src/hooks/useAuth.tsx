import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSigIn } from "../services/useSigIn";

export default function useAuth() {
  const { login } = useSigIn();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("As senhas não coincidem!");
      return;
    }

    const username = user;
    login(username);
    navigate("/list");
    setError("");
  };

  return {
    setEmail,
    setPassword,
    setUser,
    handleSubmit,
    setConfirmPassword,
    user,
    email,
    password,
    confirmPassword,
    error,
  };
}
