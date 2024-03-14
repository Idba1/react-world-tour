import './country.css'
const Country = ({country}) => {
    const {name, flags, currencies,region} = country
    return (
        <div className='body'>
            <img src={flags.png}/>
            <h4>Name: {name?.common}</h4>
            <h4>Official Name: {name?.official}</h4>
            <h5>Native Name: {name?.nativeName?.ell?.official}</h5>
            <p>Currencies: {currencies?.EUR?.name}</p>
            <p>symbol: {currencies?.EUR?.symbol}</p>
            <h5>region: {region}</h5>
            <p><small>cca3: {country.cca3}</small></p>
        </div>
    );
};

export default Country;