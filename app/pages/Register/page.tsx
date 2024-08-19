"use client"
import Footer from "@/app/components/Footer"
import Nav from "@/app/components/Nav"
import Link from "next/link";
import { useState } from "react";

export default function Register(){
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const [error, setError] = useState("");
  
    function fakeRegister(){
      if (!userName || !passWord){
        setError("Please fill out fields")
      }
      sessionStorage.setItem("Registered", `User:${userName}=true?`)
      setError("Successfully registered")
    }
    return (
        <main className="flex min-h-screen flex-col items-center min-w-[500px]">
            <Nav />
            <section>
          <h1 className="text-3xl font-bold">Register</h1>
        </section>
        <section
          className="border w-[20vw] h-[60vh] flex flex-col items-center justify-center rounded-lg shadow-2xl m-8"
        >
          <div
            className="flex flex-col h-[150px] justify-evenly items-center"
          >
            <h4>
              Enter Username
            </h4>
            <input 
              onChange={(e) => 
                setUserName(e.target.value)
              }
              className="border rounded text-center shadow-lg"
              type="text" name="Username" id="UserNameEnter" placeholder="UserName?" 
            />
          </div>
          <div
            className="flex flex-col h-[150px] justify-evenly items-center"
          >
            <h4>
              Enter Password
            </h4>
            <input 
              onChange={(e) => 
                setPassWord(e.target.value)
              }
              className="border rounded text-center shadow-lg"
              type="password" name="Password" id="PassWordEnter" placeholder="Password?" 
            />
          </div>
          <div
            className="flex flex-col justify-evenly items-center h-[150px]"
          >
            <button
              className="border rounded-xl w-[100px] hover:bg-black hover:text-white"
              onClick={() => 
                fakeRegister()
              }
            >
              Register
            </button>
            {error && (
              <p
                className="animate-pulse"
              >
                {error}
              </p>
            )}
            <Link
              href={"/pages/Login"}
              className="text-sm font-bold hover:scale-110"
            >
              Want to Login?
            </Link>              
          </div>
        
        </section>
            <Footer />
        </main>
    )
}