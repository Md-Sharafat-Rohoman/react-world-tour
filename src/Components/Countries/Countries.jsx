import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedcountires = country => {
        console.log('add this to your visited country');
        // console.log(country)
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = flag => {
        console.log('handle flag')
        const newvisitedflag = [...visitedFlag, flag];
        setVisitedFlag(newvisitedflag);
    }


    return (
        <div>
            <h1>Countries: {countries.length}</h1>
            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div>
                <h4>Visited Flag: {visitedFlag.length}</h4>
                {
                    visitedFlag.map(flag => <img src={flag}></img>)
                }
            </div>
            <div className="countries-container">
                {
                    countries.map(country =>
                        <Country
                            handleVisitedcountires={handleVisitedcountires}
                            handleVisitedFlag={handleVisitedFlag}
                            key={country.ccn3}
                            country={country}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;