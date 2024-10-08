"use client"

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [error, setError] = useState("");

  function fakeLogin(){
    if (!userName || !passWord){
      setError("Please fill out fields")
    }
    if (sessionStorage.getItem("Registered") != null){
      sessionStorage.setItem("login", `User:${userName}=true?`)
      setError("Successfully logged in")
    } else {
      setError("No user exists")
    }
    
  }

  return (
    <main className="flex min-h-screen flex-col items-center min-w-[500px]">
      <Nav />
      <div className="flex flex-col items-center justify-center h-full">
        <section>
          <h1 className="text-3xl font-bold">Login</h1>
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
                fakeLogin()
              }
            >
              LOGIN
            </button>
            {error && (
              <p
                className="animate-pulse"
              >
                {error}
              </p>
            )}
            <Link
              href={"/pages/Register"}
              className="text-sm font-bold hover:scale-110"
            >
              Want to Register?
            </Link>              
          </div>
        
        </section>
      </div>
      <Footer />
    </main>
  );
}
