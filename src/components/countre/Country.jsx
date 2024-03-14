import { useState } from 'react';
import './country.css'
const Country = ({ country }) => {

    const { name, flags, currencies, region } = country

    const [Visited, setVisited] = useState(false)

    const handleVisitedClick = () => {
        setVisited(!Visited)
    }
    return (
        <div className={`body ${Visited && 'visited'}`}>
            <img src={flags.png} />
            <h4>Name: {name?.common}</h4>
            <h4>Official Name: {name?.official}</h4>
            <h5>Native Name: {name?.nativeName?.ell?.official}</h5>
            <p>Currencies: {currencies?.EUR?.name}</p>
            <p>symbol: {currencies?.EUR?.symbol}</p>
            <h5>region: {region}</h5>
            <p><small>cca3: {country.cca3}</small></p>
            <button onClick={handleVisitedClick}>Going</button>
            {
                Visited? 'I have visited this country' : 'I want to visit'
            }
        </div>
    );
};

export default Country;