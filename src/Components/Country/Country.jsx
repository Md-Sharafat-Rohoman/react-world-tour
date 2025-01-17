import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedcountires,handleVisitedFlag}) => {
    console.log(country)

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited)
    }

    const passWidthParams = () =>{
        handleVisitedcountires(country)
    }
    const handleFlag = () =>{
        handleVisitedFlag(country.flags.png)
    }


    const { name, flags, population, area, cca3 } = country;
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <img src={flags.png} alt="" />
            <h3>Country: {name.common}</h3>
            <h3>Population: {population}</h3>
            <h4>Area: {area}</h4>
            <p><small>code: {cca3}</small></p>
            <button onClick={passWidthParams}>Mark Visited</button>
            <br />
            <button onClick={handleFlag}>Add Flag</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {
                visited ? 'i have visited this country' : 'i want to visited'
            }

        </div>
    );
};

export default Country;