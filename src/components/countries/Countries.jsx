import { useEffect } from "react";
import { useState } from "react";
import Country from "../countre/Country";

const Countries = () => {
    const[countries, setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h2>All Countries : {countries.length}</h2>
            {
                countries.map(country => <Country country={country} key={country.cca3}></Country>)
            }
        </div>
    );
};

export default Countries;