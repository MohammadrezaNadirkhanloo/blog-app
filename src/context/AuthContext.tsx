"use client";

import { getUserApi, signupApi, singinApi } from "@/services/authService";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from "react";
import toast from "react-hot-toast";

// Define types for Auth Context
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signin: (values: SigninValues) => Promise<void>;
  signup: (values: SignupValues) => Promise<void>;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

interface User {
  name: string;
  email: string;
  avatar: string;
  bookmarkedPosts: [];
  createdAt: string;
  likedPosts: [];
  updatedAt: string;
  __v: number;
  _id: string;
}

interface SigninValues {
  email: string;
  password: string;
}

interface SignupValues {
  name: string;
  email: string;
  password: string;
}

type AuthAction =
  | { type: "loading" }
  | { type: "rejected"; payload: string }
  | { type: "signin" | "signup" | "user/loaded"; payload: User }
  | { type: "logout" };

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "signin":
    case "signup":
    case "user/loaded":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case "logout":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      throw new Error("Unknown action!");
  }
}

export default function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [{ user, isAuthenticated, isLoading }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  async function signin(values: SigninValues): Promise<void> {
    dispatch({ type: "loading" });
    try {
      const { message, user } = await singinApi(values);
      dispatch({ type: "signin", payload: user });
      toast.success(message);
      router.push("/profile");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMsg = error.response?.data?.message || "An error occurred";
        dispatch({ type: "rejected", payload: errorMsg });
        toast.error(errorMsg);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  }

  async function signup(values: SignupValues): Promise<void> {
    dispatch({ type: "loading" });
    try {
      const { message, user } = await signupApi(values);
      dispatch({ type: "signup", payload: user });
      toast.success(message);
      router.push("/profile");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMsg = error.response?.data?.message || "An error occurred";
        dispatch({ type: "rejected", payload: errorMsg });
        toast.error(errorMsg);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  }

  async function getUser(): Promise<void> {
    dispatch({ type: "loading" });
    try {
      // await new Promise((resolve, reject) =>
      //   setTimeout(() => resolve("ddd"), 4000)
      // );
      const { user } = await getUserApi();
      dispatch({ type: "user/loaded", payload: user });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMsg = error.response?.data?.message || "An error occurred";
        dispatch({ type: "rejected", payload: errorMsg });
        // toast(errorMsg);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  }

  useEffect(() => {
    async function fetchData() {
      await getUser();
    }
    fetchData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, signin, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) throw new Error("AuthContext is not found");
  return context;
}
