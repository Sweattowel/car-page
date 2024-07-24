"use client"
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import AdPackage from "./Component/AdPackage";
import { useState } from "react";
/*
  Needs mileage 
  transmission
  condition
  price
  picture source too
  use this for buy menu  mileage and price if possible
  <input onChange={(e) => console.log(e.target.value)} type="range" name="" id="" />
*/
const tiers = ['Free', 'Bargain price', 'Best Value', 'Premium']
export default function Contact() {
  const [carAdDetails, setCarAdDetails] = useState({
    Tier: "",
    Mileage: 0,
    Condition: "",
    Price: 0,
    imageSources: []
  })
  const [seeDropdown, setSeeDropdown] = useState(false)
  const [dropDownSetting, setDropDownSetting] = useState('Tier')
  const buttonOptions = [
    {
      choiceName: "Tier",
      choiceOptions: [
        "Free",
        "Bargain",
        "Best value",
        "Premium",
      ]
    },
    {
      choiceName: "Condition",
      choiceOptions: [
        "Used",
        "Like New"
      ]
    },
  ]
  return (
    <main className="flex min-h-screen flex-col items-center min-w-[500px]">
      <Nav />
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold">Sell a car</h1>
        <AdPackage />
        <h2 className="font-bold texl-xl m-8 text-2xl">
          Create Your AD here!
        </h2>        
        <section
          className="border w-[80vw] flex flex-col h-[70vh]"
        >
          <ul
            className="flex w-[15rem] p-4"
          >
            {buttonOptions.map((button: any, index: number) => (
              <button
                onClick={() => {
                  setSeeDropdown(true)
                  setDropDownSetting(button.choiceName)

                }}
                className={`${dropDownSetting === button.choiceName && "font-bold"} w-full border hover:opacity-60`}
              >
                {button.choiceName} Select
              </button>
            ))}  
            {seeDropdown &&  
              <ul
                className=" flex flex-col shadow-lg bg-white absolute w-[15%] left-0 bottom-14 justify-center items-center divide-y h-[12%]"
              >
                {buttonOptions
                  .find((d) => d.choiceName === dropDownSetting)
                  ?.choiceOptions.map((choice: any, index: number) => (
                    <button 
                      className="hover:opacity-60 w-full"
                      onClick={() => {
                        setSeeDropdown(false)
                        setDropDownSetting("")
                      }}
                      key={index}
                    >
                      {choice}
                    </button>
                  ))}
              </ul>
            }                      
          </ul>
          <div className="p-8">
            <input type="number" name="NumberInputMileage" id="Mileage" placeholder="Enter Mileage" />
          </div>


        </section>
        
      </div>
      <Footer />
    </main>
  );
}
