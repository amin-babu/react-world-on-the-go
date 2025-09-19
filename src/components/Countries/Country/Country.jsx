import React from 'react';

const Country = ({country}) => {
  console.log(country.capital.capital[0]);
  return (
    <div>
      <img src={country.flags.flags.png} alt="" />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>Capital: {country.capital.capital[0]}</p>
    </div>
  );
};

export default Country;