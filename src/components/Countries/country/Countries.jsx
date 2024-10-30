import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import "./style.css"


const Countries = () => {
    const[country,setCountry] = useState([])
    const[visitedCount,setVisitedCount] = useState([])
    
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])
    const BtnDynamic = (data) => {
        const newArray = [...visitedCount,data] // visitedCount is an empty array at first phase   
        setVisitedCount(newArray)
        
    }
    return (
        <>
        <h4>Total country : {country.length}</h4>
        <h4>Visited : {visitedCount.length}</h4>
        <ul>
            {
                visitedCount.map(apple => <li key={country.cc3}>{apple}</li>)
                
            }
        </ul>
        <div className="country-container">
            {
                 country.map(info=><Country key={country.cc3} BtnDynamic={BtnDynamic}  info={info}></Country>)  
                 //sending prop for btn to get the information from that file . its like when that button on that exact file will click it will send the needed data
                  //key is for not showing any error on the code basically the red underline on the code though without the red underline the code will work perfectly 
            }
        </div>
        </>
    );
};

export default Countries;