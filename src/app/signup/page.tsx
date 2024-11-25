"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "../_components/Logo";
import toast from "react-hot-toast";
import Link from "next/link";
export default function signup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    username :""
  });
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length>0) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [user]);
  const Signup = async () => {
    setLoading(true);
    toast.promise(
      axios
        .post("/api/users/signup", user)
        .then((response) => {
          console.log("Signup successful", response.data);
          router.push("/login");
        })
        .catch((error) => {
          console.log("Signup failed", error.message);
          throw new Error("")
        })
        .finally(() => {
          setLoading(false);
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
        {loading ? "PROCESSING" : "SIGNUP"}
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
        Username
      </label>
      <br></br>
      <input
        type="string"
        value={user.username}
        id="username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="bg-white w-56 p-1 border-2 border-chocolate rounded-md"
      ></input><br></br>
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
        onClick={Signup}
      >
        {disabledButton ? "No Signup" : "Signup"}
      </button>
      <Link href={"/login"}><button className="bg-chocolate text-white p-2 rounded-md my-4 w-2/3">Login here</button></Link>
    </div>
  );
}
