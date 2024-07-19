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
        <main className="h-[60vh] max-w-[80%] ml-auto mr-auto shadow-xl mb-10">
            <img className="min-h-[35vh] h-[50%] w-full rounded" src="https://resource.csnstatic.com/retail/merlin/retail-merlin-homepage/images/carsales/ad-fallback-image/hero_large.jpg" alt="Car on long road next to ocean" />
            <section className="h-[50%] w-[80%] rounded-xl bg-white relative bottom-[15%] border ml-[10%] flex flex-col justify-center items-center">
                <h2 className="text-[1.5rem] m-auto">
                    Looking for a brand new car?
                </h2>
                <ul className="flex w-[90%] m-auto justify-between">
                    {cars.map((car: any, index: number) => (
                        <li key={index} className="flex flex-col w-[16%]">
                            <img className="rounded" src={car.carPicture} alt={`${car.carName}`} />
                            <p className="mt-[1rem] text-center">
                                {car.carName} from {car.fromPrice}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}