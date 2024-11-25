"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import Logo from "../_components/Logo";
import { useEffect, useState } from "react";

export default function Profile() {
  const router = useRouter();
  const [loggedin, setLoggedIn] = useState(false);
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/");
    } catch (error: any) {
      console.log("Error encountered :", error.message);
    }
  };
  useEffect(() => {
    const gettingProfile = async () => {
      try {
        const response = await axios.post("/api/users/profile", {});
        if (response.data.message === "The user is not logged in") {
          setLoggedIn(false);
        } else setLoggedIn(true);
      } catch (error: any) {
        console.log("Error encountered");
      }
    };
    gettingProfile();
  });
  return (
    <div className="text-center">
      <Logo />
      <div>{loggedin ? "Logged In" : "Not logged In"}</div>
      <button
        onClick={logout}
        className="bg-chocolate text-white p-2 m-1 rounded-md"
      >
        Logout
      </button>
    </div>
  );
}
