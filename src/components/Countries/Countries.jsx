import React, { use, useState } from 'react';
import Country from './Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (country) => {
    console.log('Btn is clicked handleVisitedCountries', country);
  }
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <div>
      <h1>In the Countries: {countries.length}</h1>
      <h3>Total: Countries visited</h3>
      <div className='countries'>
        {
          countries.map(country => <Country
            key={country.cca3.cca3}
            handleVisitedCountries={handleVisitedCountries}
            country={country}>
            </Country>)
        }
      </div>
    </div>
  );
};

export default Countries;