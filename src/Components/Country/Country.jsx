import './Country.css'

const Country = ({country}) => {
    console.log(country)
    

    const {name, flags, population, area} = country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>Country: {name.common}</h3>
            <h3>Population: {population}</h3>
            <h4>Area: {area}</h4>

        </div>
    );
};

export default Country;