const cars = [
    {carName:'2022 Jeep Grand Cherokee Night Eagle Auto 4x4 MY23',fromPrice: '$71,700', carPicture: "https://carsales.pxcrush.net/car/cil/wrmniuvn7v4o6djcw5k5ozih2.jpg?pxc_method=gravityfill&pxc_bgtype=self"},
    {carName:'2022 Jeep Grand Cherokee Night Eagle Auto 4x4 MY23',fromPrice: '$71,700', carPicture: "https://carsales.pxcrush.net/car/cil/wrmniuvn7v4o6djcw5k5ozih2.jpg?pxc_method=gravityfill&pxc_bgtype=self"},
    {carName:'2022 Jeep Grand Cherokee Night Eagle Auto 4x4 MY23',fromPrice: '$71,700', carPicture: "https://carsales.pxcrush.net/car/cil/wrmniuvn7v4o6djcw5k5ozih2.jpg?pxc_method=gravityfill&pxc_bgtype=self"},
    {carName:'2022 Jeep Grand Cherokee Night Eagle Auto 4x4 MY23',fromPrice: '$71,700', carPicture: "https://carsales.pxcrush.net/car/cil/wrmniuvn7v4o6djcw5k5ozih2.jpg?pxc_method=gravityfill&pxc_bgtype=self"},
    {carName:'2022 Jeep Grand Cherokee Night Eagle Auto 4x4 MY23',fromPrice: '$71,700', carPicture: "https://carsales.pxcrush.net/car/cil/wrmniuvn7v4o6djcw5k5ozih2.jpg?pxc_method=gravityfill&pxc_bgtype=self"},
    {carName:'2022 Jeep Grand Cherokee Night Eagle Auto 4x4 MY23',fromPrice: '$71,700', carPicture: "https://carsales.pxcrush.net/car/cil/wrmniuvn7v4o6djcw5k5ozih2.jpg?pxc_method=gravityfill&pxc_bgtype=self"},
]
export default function Brochure() {
    return (
        <main className="h-[80vh] w-[90%] md:max-w-[80%] ml-auto mr-auto shadow-xl mb-10">
            <img className="min-h-[35vh] h-[50%] w-full rounded" src="https://resource.csnstatic.com/retail/merlin/retail-merlin-homepage/images/carsales/ad-fallback-image/hero_large.jpg" alt="Car on long road next to ocean" />
            <section className="h-[60%] w-[90%] rounded-xl bg-white relative bottom-[15%] border ml-[5%] flex flex-col justify-center items-center">
                <h2 className="text-[1.3rem] md:text-[1.5rem] m-auto">
                    Looking for a brand new car?
                </h2>
                <ul className="flex w-[95%] h-[70%] m-auto justify-between overflow-hidden overflow-x-auto">
                    {cars.map((car: any, index: number) => (
                        <li key={index} className="flex flex-col h-full min-w-[40vw] md:min-w-[20vw] w-[16%] ml-1 mr-1">
                            <img className="min-h-[45%] rounded" src={car.carPicture} alt={`${car.carName}`} />
                            <p className="mt-[1rem] text-center md:text-[1rem] text-[0.7rem]">
                                {car.carName} from {car.fromPrice}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}