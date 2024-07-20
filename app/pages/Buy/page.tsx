"use client"
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import DummyData from "../../DummyData/DummyData.json"
import { useState, useEffect } from "react";


export default function About() {
  return (
    <main className="flex min-h-[200vh] flex-col min-w-[500px] border">
      <Nav />
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold">Buy a car</h1>
        <ul className="flex flex-wrap justify-between w-[80%] h-[120vh]">
          {DummyData.map((data:any, index: number) => (
            <div key={index} className="w-[450px] h-[50vh] border flex flex-col rounded-xl shadow">

                <ImageDisplay imageUrls={data.images} />
              <h2 className="h-[10%] items-center flex m-auto text-2xl">
                {data.name}
              </h2>                
              <div className=" flex flex-col h-[20%] border-t text-center items-center text-l">
                <p className="flex justify-evenly items-center h-full">
                  {data.mileage} <div className="m-auto w-1 h-1 rounded-full bg-blue-600 ml-1 mr-1"></div> {data.transmission} <div className="m-auto w-1 h-1 rounded-full bg-blue-600 ml-1 mr-1"></div> {data.prior === 1 ? 'Used' : 'Unused'}
                </p>
              </div>
                <p className="w-full text-center text-2xl">
                  From just ${data.price}
                </p>              
            </div>
          ))}          
        </ul>

      </div>
      <Footer />
    </main>
  );
}

interface ImageDisplayProps {
  imageUrls: string[];
}
const ImageDisplay = ({ imageUrls }: ImageDisplayProps) => {
  const [currImage, setCurrImage] = useState(0);


  function nextImage() {
    setCurrImage(currImage === 5 ? 0 : currImage + 1)
  }
  function prevImage() {
    setCurrImage(currImage === 0 ? 5 : currImage - 1)
  }

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div
        className="absolute flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currImage * 100}%)` }}
      >
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index + 1}`}
            className="min-w-full min-h-full object-cover rounded-t-xl"
          />
        ))}
      </div>
      <button
        className="rounded absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-black text-white hover:opacity-60"
        onClick={prevImage}
      >
        &lt;
      </button>
      <button
        className="rounded absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-black text-white hover:opacity-60"
        onClick={nextImage}
      >
        &gt;
      </button>
    </div>
  );
};