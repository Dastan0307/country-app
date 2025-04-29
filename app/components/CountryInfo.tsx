import React from 'react';  
import '../../styles/country.scss'

interface Country {  
  name: string;  
  borders: string[];  
  capital: string;  
  population: number;  
  flag: string;  
}  

interface CountryInfoProps {  
  country: Country | null;  
}  

const CountryInfo: React.FC<CountryInfoProps> = ({ country }) => {  
  if (!country) {  
    return <p>Выберите страну</p>;  
  }  

  return (  
    <div className="content country-info">  
      <h2>{country.name}</h2>  
      <img src={country.flag} alt={`Flag of ${country.name}`} />  
      
      <div className="country-detail">  
        <p><strong>Столица:</strong> {country.capital}</p>  
        <p><strong>Население:</strong> {country.population.toLocaleString()}</p>  
        <h3>Граничит с:</h3>  
        <ul>  
          {country.borders.length ? (  
            country.borders.map((border, index) => (  
              <li key={index}>{border}</li>  
            ))  
          ) : (  
            <li>Нет соседей</li>  
          )}  
        </ul>  
      </div>  

      <button className="button">Узнать больше</button>  
    </div>  
  );  
};  

export default CountryInfo;  