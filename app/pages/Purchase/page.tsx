'use client'

import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";
import DummyData from "../../DummyData/DummyData.json";
import ImageDisplay from "../Buy/components/ImageDisplay";
import Dot from "../Buy/components/Dot";

interface CarDetails {
    id: number
    name: string,
    transmission: string
    condition: string,
    price: string,
    mileage: number,
    images: string[]
}

export default function Purchase() {
    const searchParams = useSearchParams()
    const CarID = searchParams.get('carID')
    const CarData: CarDetails = DummyData.find(car => car.id === parseInt(CarID)) || {
        id: -1,
        name: '',
        transmission: '',
        condition: '',
        price: '',
        mileage: '',
        images: []
    }
    
    useEffect(() => {
        if (!CarID || parseInt(CarID) === -1) {
            window.location.href = '/'
        }        
    },[CarID])
    return (
        <main className="flex min-h-screen flex-col items-center min-w-[500px]">
            <Nav />
            <div
                className="flex flex-col h-[70vh] justify-center w-[70%]"
            >
                <h2
                    className="text-center w-full text-2xl font-bold p-5"
                >
                    {CarData.condition} {CarData.name}
                </h2>
                <section
                    className="h-[70%] w-full"
                >
                    <ImageDisplay imageUrls={CarData.images}/>
                </section>
                <div
                    className="flex justify-center text-xl p-2"
                >
                    {CarData.mileage} Kms <Dot /> {CarData.transmission} Transmission

                </div>
                <p className="flex justify-center text-xl font-bold">
                    ${CarData.price}
                </p>                
            </div>
            <Footer />
        </main>
    )
}