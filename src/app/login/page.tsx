"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "../_components/Logo";
import toast from "react-hot-toast";

export default function login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [user]);
  const Login = async () => {
    setLoading(true);
    toast.promise(
      axios
        .post("/api/users/login", user)
        .then((response) => {
          console.log("Login successful", response.data);
        })
        .catch((error) => {
          console.log("Login failed", error.message);
          throw new Error("")
        })
        .finally(() => {
          setLoading(false);
          router.push("/allreviews");
        }),
      {
        loading: "Signup request initiated",
        success: "Signup successful",
        error: "Error signing up",
      }
    );
  };

  return (
    <div className="font-poppins w-max text-center mx-auto mt-10">
      <Logo />
      <div className="text-2xl font-semibold my-4 text-chocolate">
        {loading ? "PROCESSING" : "LOGIN"}
      </div>
      <label htmlFor="email" className="text-chocolate">
        Email
      </label>
      <br></br>
      <input
        type="text"
        value={user.email}
        id="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="bg-white border-2 w-56 p-1 border-chocolate rounded-md mb-4"
      ></input>{" "}
      <br></br>
      <label htmlFor="password" className="text-chocolate">
        Password
      </label>
      <br></br>
      <input
        type="password"
        value={user.password}
        id="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="bg-white w-56 p-1 border-2 border-chocolate rounded-md"
      ></input>
      <br></br>
      <button
        className="bg-chocolate text-white p-2 rounded-md my-4 w-2/3"
        onClick={Login}
      >
        {disabledButton ? "No Login" : "Login"}
      </button>
    </div>
  );
}
