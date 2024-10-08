"use client";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import DummyData from "../../DummyData/DummyData.json";
import ImageDisplay from "./components/ImageDisplay";
import { useEffect, useState } from "react";
import Dot from "./components/Dot";
import Link from "next/link";

interface FilterStructure {
  type: string;
  filter: string;
}
interface CarDetails {
  id: number,
  name: string,
  transmission: string
  condition: string,
  price: string,
  mileage: number,
  images: string[]
}
const filterConstraints = [
  { type: "Mileage", options: ["Maximum Mileage"], filterType: 2 },
  { type: "Transmission", options: ['Automatic', 'Manual', 'CVT'], filterType: 0 },
  { type: "Condition", options: ['Used', 'New'], filterType: 0 },
  { type: "Price", options: [20000, 25000, 30000, 35000], filterType: 1 }
];

export default function About() {
  const [filters, setFilters] = useState<FilterStructure[]>([]);
  const [filteredData, setFilteredData] = useState(DummyData);

  function addToFilters(filterType: string, filterCondition: string) {
    if (filterType === 'Mileage' && filterCondition == "") {
      filterCondition = "999999999"
    }    
    const newFilter = { type: filterType, filter: filterCondition };

    const updatedFilters = filters.filter(f => f.type !== filterType);

    updatedFilters.push(newFilter);

    setFilters(updatedFilters);
  }



  function applyFilters() {
    let data = DummyData;
    if (sessionStorage.getItem("CARAD") !== null){
      let preConvertAdd = sessionStorage.getItem("CARAD")
      let newAdd: CarDetails = JSON.parse(preConvertAdd!)
      newAdd.id = data.length + 1
      data.push(newAdd)
      console.log(data)
    }
    filters.forEach(filter => {
      if (filter.type === "Mileage") {
        data = data.filter(d => d.mileage <= parseInt(filter.filter));
      } else if (filter.type === "Transmission") {
        data = data.filter(d => d.transmission === filter.filter);
      } else if (filter.type === "Condition") {
        data = data.filter(d => d.condition === filter.filter);
      } else if (filter.type === "Price") {
        data = data.filter(d => 
          (parseInt(d.price) <= parseInt(filter.filter)) && 
          (parseInt(d.price) >= parseInt(filter.filter) - (parseInt(filter.filter) === 20000 ? 20000 : 5000)));
      }
    });

    setFilteredData(data);
  }

  
  useEffect(() => {
    console.log(filters);
    applyFilters();
  }, [filters]);
  
  return (
    <main className="flex h-full flex-col min-w-[500px] border">
      <Nav />
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold m-[2rem] p-2 rounded-lg w-[90vw] bg-gray-600 text-center text-white">Buy a car</h1>
        <section className="flex flex-row">
          <div className="w-[15vw] h-full absolute">
            <h2 className="text-center text-2xl font-bold">Filters</h2>
            <ol className="text-center p-2">
              {filterConstraints.map((constraint: any, index: number) => (
                <li key={index}>
                  <h3 className="font-bold p-1 text-xl">{constraint.type}</h3>
                  <ul className="flex flex-col text-center justify-center p-1">
                    {constraint.options.map((option: any, optionIndex: number) => constraint.filterType === 0 && (
                      <button
                        onClick={() => { addToFilters(constraint.type, option); }}
                        key={optionIndex}
                        className={`${filters.some(f => f.filter === option && f.type === constraint.type) ? "font-bold" : ""} hover:font-bold`}
                      >
                        {option}
                      </button>
                    ))}
                    {constraint.options.map((option: any, optionIndex: number) => constraint.filterType === 1 && (
                      <button
                        onClick={() => { addToFilters(constraint.type, option); }}
                        key={optionIndex}
                        className={`${filters.some(f => f.filter === option && f.type === constraint.type) ? "font-bold" : ""} hover:font-bold`}
                      >
                        {constraint.options[optionIndex - 1] || 0} to {option}
                      </button>
                    ))}
                    {constraint.options.map((option: any, optionIndex: number) => constraint.filterType === 2 && (
                      <p key={optionIndex}>
                        {option} = <input onChange={(e) => addToFilters(constraint.type, e.target.value)} className="flex justify-center m-auto text-center border w-full" type="text" placeholder="Mileage" />
                      </p>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <button
              onClick={() => setFilters([])}
              className="font-bold flex m-auto hover:scale-[1.1] transition-transform duration-500">
              Clear Filters
            </button>
          </div>
          <ul className="flex flex-wrap justify-evenly w-[80vw] ml-[15vw]  h-full">
            {filteredData.map((data: CarDetails, index: number) => (
              <div key={index} className="w-[50vw] md:w-[450px] h-[50vh] border flex flex-col rounded-xl shadow-lg">
                <div
                  className="h-[50%]"
                >
                  <ImageDisplay imageUrls={data.images} />  
                </div>
                
                <section className="h-[40%] flex flex-col justify-evenly">
                  <h2 className="w-full justify-center items-center flex text-2xl">
                    {data.name}
                  </h2>
                  <div className="flex flex-col text-center items-center justify-center text-l">
                    <div className="flex justify-evenly items-center h-full w-[80%]">
                      {data.mileage}-KMS <Dot /> {data.transmission} <Dot /> {data.condition}
                    </div>
                  </div>
                  <p className="w-full text-center text-2xl">
                    From just ${data.price}
                  </p>                
                  <Link
                    href={`/pages/Purchase?carID=${data.id}`}  
                    className="w-[80%] flex justify-center ml-auto mr-auto text-center font-bold text-2xl hover:scale-[1.1] hover:opacity-60"
                  >
                    Buy Now!
                  </Link>  
                </section>
                
              </div>
            ))}
          </ul>
        </section>
      </div>
      <Footer />
    </main>
  );
}
