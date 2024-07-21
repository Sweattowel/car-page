"use client"
import { useState } from "react";

interface ImageDisplayProps {
    imageUrls: string[];
}

const ImageDisplay = ({ imageUrls }: ImageDisplayProps) => {
    const [currImage, setCurrImage] = useState(0);
    const [buttons, setButtons] = useState([0,1,2,3,4])
  
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
          className={`${currImage === 0 && "hidden"} rounded absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-black text-white hover:opacity-60`}
          onClick={prevImage}
        >
          &lt;
        </button>
        <button
          className={`${currImage === 4 && "hidden"} rounded absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-black text-white hover:opacity-60`}
          onClick={nextImage}
        >
          &gt;
        </button>
        <section 
          className={` rounded absolute bottom-1 left-[30%] text-center justify-center w-[40%] m-auto flex transform bg-black text-white`}
          >
          {buttons.map((button: number, index: number) => (
            <button 
              onClick={() => {setCurrImage(index)}}
            >
              <div className={`${currImage === index ? "bg-black" : "bg-white"} border-white border m-auto w-2 h-2  rounded-full  ml-1 mr-1`}></div>
            </button>
          ))}        
        </section>
  
      </div>
    );
};
  export default ImageDisplay