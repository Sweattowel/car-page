"use client"
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import DummyData from "../../DummyData/DummyData.json"
import { useState, useEffect } from "react";


export default function About() {
  return (
    <main className="flex min-h-[200vh] flex-col items-center min-w-[500px]">
      <Nav />
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold">Buy a car</h1>
        <ul className="flex flex-wrap justify-between">
          {DummyData.map((data:any, index: number) => (
            <div key={index} className="w-[450px] h-[50vh] border p-8 flex flex-col justify-around">
              <h2>
                {data.name}
              </h2>
                <ImageDisplay imageUrls={data.images} />
              <p className="h-[10%] border text-center items-center text-xl">
                From just {data.price}
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
            className="min-w-full min-h-full object-cover"
          />
        ))}
      </div>
      <button
        className="rounded absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-300 hover:opacity-90"
        onClick={prevImage}
      >
        &lt;
      </button>
      <button
        className="rounded absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-300 hover:opacity-90"
        onClick={nextImage}
      >
        &gt;
      </button>
    </div>
  );
};