"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "../_components/Logo";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Review = () => {
  const params = useSearchParams();
  const [data, setData] = useState<any>(null); // Initial state to null
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const like=async()=>{
    const response = await axios.post("/api/reviews/likereview",{id:params.get("id")});
    console.log(response.data)
    setData((prev:any)=>({
      ...prev,
      likes:prev.likes+1
    }))
  }
  const dislike =async()=>{
    const response = await axios.post("/api/reviews/dislikereview",{id:params.get("id")});
    console.log(response.data)
    setData((prev:any)=>({
      ...prev,
      likes:prev.likes-1
    }))
  }
  useEffect(() => {
    const id = params.get("id");

    if (!id) {
      setError("No ID provided in query params");
      setLoading(false);
      return;
    }

    const gettingData = async () => {
      try {
        const response = await axios.post("/api/reviews/readbook/", {
          id,
        });
        if (!response.data.success) {
          router.push("/");
        } else {
          setData(response.data.data);
 
          setError("");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    gettingData();
  }, [params]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="font-poppins">
      <Logo />
      <h1 className="text-center">Book Review</h1>
      {data ? (
        <div>
          <div className="bg-white p-2 m-2 border-2 border-chocolate rounded-md">
            <p>
              <strong>Title:</strong> {data.name}
            </p>
            <p>
              <strong>Author:</strong> {data.author}
            </p>
            <p>
              <strong>Review:</strong> {data.review}
            </p>
            <p>
              <strong>Created On:</strong> {data.addedOn}
            </p>
            <p>
              <strong>Buy here:</strong> {data.buy}
            </p>
            <p>
              <strong>Description:</strong> {data.description}
            </p>
            <p>
              <strong>Languages:</strong> {data.languages}
            </p>
            <p>
              <strong>Likes:</strong> {data.likes}
            </p>
            <p>
              <strong>Series:</strong> {data.series}
            </p>
            <p>
              <strong>Small description:</strong> {data.smallDescription}
            </p>
            <p>
              <strong>Stars:</strong> {data.stars}
            </p>
            <p>
              <strong>Views:</strong> {data.views}
            </p>
          </div>
          <button className="bg-chocolate text-white p-2 m-1 rounded-md" onClick={like}>Like</button><br></br>
          <button className="bg-chocolate text-white p-2 m-1 rounded-md" onClick={dislike}>Dislike</button>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default Review;
