import './country.css'
const Country = ({country}) => {
    const {name} = country
    return (
        <div className='body'>
            <h4>Name: {name?.common}</h4>
            {/* <p>cca3: {country.cca3}</p> */}
        </div>
    );
};

export default Country;