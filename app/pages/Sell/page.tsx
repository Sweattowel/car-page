"use client"
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import AdPackage from "./Component/AdPackage";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    console.log(carAdDetails)
  },[carAdDetails])
  return (
    <main className="flex min-h-screen flex-col items-center min-w-[500px]">
      <Nav />
      <div className="flex flex-col items-center justify-evenly h-[150vh] border">
        <h1 className="text-3xl font-bold m-[2rem] p-2 rounded-lg w-[90vw] bg-gray-600 text-center text-white">Sell a car</h1>
        <img 
          className="absolute w-[90vw] rounded top-[10rem] z-[-1]"
          src="https://t4.ftcdn.net/jpg/03/57/69/95/360_F_357699580_cOFUrDsFhqe7AGz1zoixOHqLocipHTrj.jpg" 
          alt="SkyBackground" 
        />
        <AdPackage />
        <h2 className="text-3xl font-bold m-[2rem] p-5 rounded-lg w-[90vw] bg-gray-600 text-center text-white">
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
                key={index}
                onClick={() => {
                  setSeeDropdown(!seeDropdown)
                  setDropDownSetting(button.choiceName)

                }}
                className={`${dropDownSetting === button.choiceName && "font-bold"} w-full border h-16 hover:opacity-60`}
              >
                {carAdDetails[button.choiceName] === "" ? `${button.choiceName} Select` : carAdDetails[button.choiceName]}
              </button>
            ))}  
            {seeDropdown &&  
              <ul
                className=" flex flex-col shadow-lg bg-white absolute w-[15%] bottom-14 justify-center items-center divide-y h-[12%]"
              >
                {buttonOptions
                  .find((d) => d.choiceName === dropDownSetting)
                  ?.choiceOptions.map((choice: any, index: number) => (
                    <button 
                      className="hover:opacity-60 w-full"
                      onClick={() => {
                        setSeeDropdown(false)
                        setDropDownSetting("")
                        setCarAdDetails(prevDetails => ({
                          ...prevDetails,
                          [dropDownSetting]: choice
                        }));
                      }}
                      key={index}
                    >
                      {choice}
                    </button>
                  ))}
              </ul>
            }                      
          </ul>
          <div className="p-8 flex flex-col border w-[13rem] m-4 divide-y justify-evenly">
            <input 
              className="text-center"
              onChange={
                (e) => setCarAdDetails(prevDetails => ({
                ...prevDetails,
                Mileage: parseInt(e.target.value),
                Condition: "Used"
              }))}
              type="number" name="NumberInputMileage" id="Mileage" placeholder="Enter Mileage" 
            />
            <input 
              className="text-center"
              onChange={(e) => setCarAdDetails(prevDetails => ({
                ...prevDetails,
                Price: parseInt(e.target.value)
              }))}
              type="number" name="NumberInputPrice" id="Price" placeholder="Enter Price" 
            />
          </div>


        </section>
        
      </div>
      <Footer />
    </main>
  );
}
