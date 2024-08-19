"use client"
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import AdPackage from "./Component/AdPackage";
import { use, useEffect, useState } from "react";
interface CarDetailsStruc{
  id: number,
  name: string,
  transmission: string
  condition: string,
  price: string,
  mileage: number,
  images: string[]
}
const tiers = ['Free', 'Bargain price', 'Best Value', 'Premium']
export default function Contact() {
  // CAR AD HANDLE
  const [carAdDetails, setCarAdDetails] = useState({
    id: -1,
    name: "",
    transmission: "",
    tier: "",
    condition: "",
    price: 0,
    mileage: 0,
    images: []
  })  
  const [newImage, setNewImage] = useState("")
  function handleCarAdSubmit(){
    sessionStorage.setItem("CARAD", JSON.stringify(carAdDetails))
    setCarAdDetails({
      id: -1,
      name: "",
      transmission: "",
      tier: "",
      condition: "",
      price: 0,
      mileage: 0,
      images: []
    })
  }
  // SEE HANDLE
  const [canSell, setCanSell] = useState("")
  const [seeDropdown, setSeeDropdown] = useState(false)
  const [dropDownSetting, setDropDownSetting] = useState('tier')
  // BUTTON DEFINITION
  const buttonOptions = [
    {
      choiceName: "tier",
      choiceOptions: [
        "Free",
        "Bargain",
        "Best value",
        "Premium",
      ]
    },
    {
      choiceName: "condition",
      choiceOptions: [
        "Used",
        "Like New"
      ]
    },
    {
      choiceName: "transmission",
      choiceOptions: [
        "Automatic",
        "Manual",
        "Hybrid"
      ]
    },
  ]
  // USE EFFECT
  useEffect(() => {
    console.log(carAdDetails)
  },[carAdDetails])

  useEffect(() => {
    let user = sessionStorage.getItem("login")
    if (user !== null){
      setCanSell(user)
    }
    console.log(user)
  },[])
  return (
    <main className="flex min-h-screen flex-col items-center min-w-[500px]">
      <Nav />
      <div className="flex flex-col items-center justify-evenly h-full">
        <h1 className="text-3xl font-bold m-[2rem] p-2 rounded-lg w-[90vw] bg-gray-600 text-center text-white">Sell a car</h1>
        <img 
          className="absolute w-[90vw] rounded top-[10rem] z-[-1]"
          src="https://t4.ftcdn.net/jpg/03/57/69/95/360_F_357699580_cOFUrDsFhqe7AGz1zoixOHqLocipHTrj.jpg" 
          alt="SkyBackground" 
        />
        <AdPackage />
        {canSell && (
          <>
            <h2 className="text-3xl font-bold m-[2rem] p-5 rounded-lg w-[90vw] bg-gray-600 text-center text-white">
              Create Your AD here!
            </h2>        
            <section
              className="border w-[80vw] flex flex-col h-full shadow-2xl justify-evenly items-center"
            >
              <div
                className=" flex flex-col justify-center items-center h-[350px] w-[60%]"
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
                      className=" flex flex-col shadow-xl border bg-white absolute w-[15%] justify-center items-center divide-y "
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
                <div className="p-8 h-full flex flex-col w-full items-center ">
                <h2 
                    className="text-center"
                  >
                    Input Car Name:
                  </h2>
                  <input 
                    className="text-center w-full border rounded h-full m-1 p-1"
                    value={carAdDetails.name}
                    onChange={
                      (e) => setCarAdDetails(prevDetails => ({
                      ...prevDetails,
                      name: e.target.value,
                    }))}
                    type="text" name="TextInputName" id="Name" placeholder="Enter Name" 
                  />
                  <h2 
                    className="text-center"
                  >
                    Input Mileage:
                  </h2>
                  <input 
                    value={carAdDetails.mileage}
                    className="text-center w-full border rounded h-full m-1 p-1"
                    onChange={
                      (e) => setCarAdDetails(prevDetails => ({
                      ...prevDetails,
                      mileage: parseInt(e.target.value),
                      condition: "Used"
                    }))}
                    type="number" name="NumberInputMileage" id="Mileage" placeholder="Enter Mileage" 
                  />
                  <h2 
                    className="text-center"
                  >
                    Input Price:
                  </h2>
                  <input 
                    value={carAdDetails.price}
                    className="text-center w-full border rounded h-full m-1 p-1"
                    onChange={(e) => setCarAdDetails(prevDetails => ({
                      ...prevDetails,
                      price: parseInt(e.target.value)
                    }))}
                    type="number" name="NumberInputPrice" id="Price" placeholder="Enter Price" 
                  />
                </div>
              </div>
                <section
                  className="w-[60vw] h-full flex flex-col justify-evenly items-center pb-5"
                >
                  <h2
                    className="text-center"
                  >
                    Enter Five Picture URLs
                  </h2>
                  <form 
                    className="m-2"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <input 
                      onChange={(e) => setNewImage(e.target.value)}
                      className="shadow-xl border rounded text-center"
                      type="url" 
                      name="PictureInput" 
                      id="PictureInputCar" 
                      value={newImage} 
                    />     
                    <button
                      onClick={() => {
                        setCarAdDetails((prevDetails:any) => ({
                          ...prevDetails,
                          images: [...prevDetails.images, newImage], 
                        }));
                        setNewImage(''); 
                      }}
                      className="border w-10 hover:opacity-60"
                    >
                      ADD
                    </button>               
                  </form>
                  {carAdDetails.condition != "" && carAdDetails.mileage >= 0 && carAdDetails.name != "" && carAdDetails.price > 0 && carAdDetails.tier != "" && carAdDetails.images.length == 5 && (
                    <button
                      onClick={() => handleCarAdSubmit()}
                      className="w-[150px] border h-[50px] m-4 bg-white rounded hover:opacity-60"
                    >
                      SUBMIT
                    </button>                    
                  )}

                  {carAdDetails.images.length > 0 && (
                    carAdDetails.images.map((image: string, index: number) =>(
                      <div
                      key={index}
                        className="flex flex-col justify-center items-center w-[60%]"
                      >
                        <img key={index} src={image} alt="CarImageToBe" className="w-[80%] flex justify-center items-center"/>
                        <button
                          onClick={() => {
                            setCarAdDetails((prevDetails) => ({
                              ...prevDetails,
                              images: [...prevDetails.images.filter((imageToRemove) => imageToRemove !== image)], 
                            }));
                            setNewImage(''); 
                          }}
                          className="border p-1 rounded hover:opacity-60"
                        >
                          REMOVE
                        </button>  
                      </div>
                      
                    ))
                  )}


                </section>

            </section>          
          </>
        )}
        
        
      </div>
      <Footer />
    </main>
  );
}
