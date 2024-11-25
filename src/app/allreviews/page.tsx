"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Logo from "../_components/Logo";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Allbooks() {
    const [books, setBooks] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    useEffect(() => {
        const gettingData = async () => {
            try {
                const response = await axios.post("/api/reviews/allbookdetails", {});
                if(!response.data.success){
                    router.push("/");
                }
                else 
                setBooks(response.data.data);
            } catch (error: any) {
                setError("Error encountered while fetching books.");
                console.log("Error encountered ", error);
            } finally {
                setLoading(false);
            }
        };
        gettingData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className=" text-center font-poppins">
            <Logo/>
            
            <h1>Find all the books here</h1>
            {books.length === 0 ? (
                <p>No books available.</p>
            ) : (
                <div>
                    {books.map((book) => (
                        <Link
                        key={book._id} href={{
                            pathname:'review',
                            query:{
                                id: `${book._id}`
                            }
                        }}>
                        <div key={book._id} className=" m-4 border-2 p-2 border-chocolate rounded-md bg-white text-left">
                            <h2><strong>Name:</strong>{book.name}</h2>
                            <p><strong>Author:</strong> {book.author}</p>
                            {/* <p><strong>Description:</strong> {book.description}</p> */}
                            <p><strong>Small Description:</strong> {book.smallDescription}</p>
                            {/* <p><strong>Review:</strong> {book.review}</p> */}
                            <p><strong>Stars:</strong> {book.stars}</p>
                            <p><strong>Series:</strong> {book.series}</p>
                            {/* <p><strong>Buy Link:</strong> {book.buy}</p> */}
                            {/* <p><strong>Languages:</strong> {book.languages}</p> */}
                        </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
