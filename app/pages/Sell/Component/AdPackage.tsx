interface packageOptionStruc {
    packageName: string,
    price: number,
    frontPage: boolean,
    advertisement: boolean,
    advertisementPeriod: number,
    sellAssist: boolean,
    bestValue: boolean
}
const packageOptions = [
    {
        packageName: 'Free',
        price: 0,
        frontPage: false,
        advertisement: false,
        advertisementPeriod: 0,
        sellAssist: false,
        bestValue: false
    },
    {
        packageName: 'Bargain price',
        price: 15,
        frontPage: false,
        advertisement: true,
        advertisementPeriod: 10,
        sellAssist: true,
        bestValue: false
    },
    {
        packageName: 'Best Value',
        price: 30,
        frontPage: false,
        advertisement: true,
        advertisementPeriod: 20,
        sellAssist: true,
        bestValue: true
    },
    {
        packageName: 'Premium',
        price: 50,
        frontPage: true,
        advertisement: true,
        advertisementPeriod: 999,
        sellAssist: true,
        bestValue: false
    },
]
export default function AdPackage() {
    return (
        <main>
            <ul className="flex flex-col w-[80vw] h-[50vh] divide-y justify-evenly items-center">
                <section className="text-center items-center justify-evenly h-full w-full divide-x flex">
                    <div
                        className="bg-gray-600 text-white rounded-tl-xl w-[20%] h-full text-center flex justify-center items-center font-bold text-xl"
                    >
                        Tier
                    </div>
                    <div
                        className="bg-gray-600 text-white w-[20%] h-full text-center flex justify-center items-center font-bold text-xl"
                    >
                        Price
                    </div>
                    <div
                        className="bg-gray-600 text-white w-[20%] h-full text-center flex justify-center items-center font-bold text-xl"
                    >
                        Front page?
                    </div>
                    <div
                        className="bg-gray-600 text-white w-[20%] h-full text-center flex justify-center items-center font-bold text-xl"
                    >
                        Free Advertising
                    </div>
                    <div
                        className="bg-gray-600 text-white rounded-tr-xl w-[20%] h-full text-center flex justify-center items-center font-bold text-xl"
                    >
                        Free Assistance
                    </div>
                    
                </section>
                {packageOptions.map((option: packageOptionStruc, index: number) => (
                    <li
                        className="text-center items-center justify-evenly h-full w-full divide-x flex"
                        key={index}
                    >
                        <h2
                            className="w-[20%] h-full text-center flex justify-center items-center font-bold text-xl"
                        >
                            {option.packageName}
                        </h2>
                        <div
                            className="w-[20%] h-full text-center flex justify-center items-center"
                        >
                            ${option.price} {option.bestValue && "- Best Value!"}
                        </div>
                        <div
                            className="w-[20%] h-full text-center flex justify-center items-center"
                        >
                            {option.frontPage ? "Featured!" : "Not Featured"}
                        </div>
                        <div
                            className="w-[20%] h-full text-center flex justify-center items-center"
                        >
                            {option.sellAssist && "For Up to "} {option.advertisementPeriod} Weeks
                        </div>
                        <div
                            className="w-[20%] h-full text-center flex justify-center items-center"
                        >
                            {option.advertisement && "For Up to "} {option.advertisementPeriod === 999 ? 'Forever!' : `${option.advertisementPeriod} Weeks!`} Weeks
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}