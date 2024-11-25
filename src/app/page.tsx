"use client"
import Link from "next/link"
import Logo from "./_components/Logo"

const LandingPage = ()=>{
  return(
    <div className="text-center ">
      <Logo/>
      <Link href={"/login"}><button className="bg-chocolate text-white p-2 rounded-md my-4 w-52">Login</button><br></br></Link>
      <Link href={"/signup"}><button className="bg-chocolate text-white p-2 rounded-md my-4 w-52">Signup</button><br></br></Link>
      <Link href={"/allreviews"}><button className="bg-chocolate text-white p-2 rounded-md my-4 w-52">Explore all reviews</button></Link>

    </div>
  )
}
export default LandingPage