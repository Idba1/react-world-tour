import { useEffect } from "react";
import { useState } from "react";
import Country from "../countre/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [clickFlage, setClickFlage] = useState([])


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountries = country => {
        console.log(country);
        // console.log('mark as visited')
        const newVisitedCountries = [...visitedCountries, countries]
        setVisitedCountries(newVisitedCountries)
    }

    const handleClickFlage = flage => {
        console.log(flage)
        const newClickFlage = [...clickFlage, flage]
        setClickFlage(newClickFlage);
    }

    return (
        <div>
            <h2>All Countries : {countries.length}</h2>
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.capital}</li>)
                }
            </div>
            <div>
                <h5>Click Flag</h5>
                {
                    clickFlage.map(country => <li key={country.cca3}>{country.flags.png}</li>)
                }
            </div>
            <div className="countries-container">
                {
                    countries.map(country =>
                        <Country
                            country={country}
                            handleVisitedCountries={handleVisitedCountries}
                            handleClickFlage ={handleClickFlage}
                            key={country.cca3}
                        >
                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;