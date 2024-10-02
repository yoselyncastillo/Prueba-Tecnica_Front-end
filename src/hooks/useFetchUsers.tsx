import { useState } from "react";
import {
  getUsersByUsername,
  getUserDetailsByUsername,
} from "../helpers/getUsers";
import { User } from "../interfaces/user";

export const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async (username: string) => {
    setIsLoading(true);
    setError("");
    try {
      const data: User[] = await getUsersByUsername(username);
      setUsers(data);
    } catch (error) {
      setError("Error al buscar usuarios");
    } finally {
      setIsLoading(false);
    }
  };
  const getUserDetails = async (username: string) => {
    setIsLoading(true);
    setError("");
    try {
      const data: User = await getUserDetailsByUsername(username);
      setCurrentUser(data);
    } catch (error) {
      setError("Error al buscar usuario");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    currentUser,
    users,
    isLoading,
    error,
    getUsers,
    getUserDetails,
  };
};
