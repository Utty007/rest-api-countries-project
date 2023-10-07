/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import CountryCard from '../UI/CountryCard.jsx';
import Style from './Main.module.css';
import { useSelector } from 'react-redux';

const Main = () => {
  const isLightModeActive = useSelector(state => state.ui.lightModeActive)
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Simulate an API request with a delay
    setTimeout(() => {
      fetch('https://restcountries.com/v3.1/all')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }, 1000); // Simulated delay for demonstration purposes
  }, []);

  const filteredCountries = selectedRegion ? data.filter((country) => country.region === selectedRegion) : data;
  const searchedCountries = filteredCountries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className={Style.Main}>
        <div>
          <FaSearch className={Style.FaSearch} />
          <input
            className={`${Style.Input} ${isLightModeActive ? Style.lightModeBg : Style.darkModeBg} ${isLightModeActive ? Style.lightModeText : Style.darkModeText}`}
            type="text"
            placeholder="Search for a country..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select
          className={`${Style.Select} ${isLightModeActive ? Style.lightModeBg : Style.darkModeBg} ${isLightModeActive ? Style.lightModeText : Style.darkModeText}`}
          onChange={(e) => setSelectedRegion(e.target.value)}
          value={selectedRegion}
        >
          <option value="">Filter By Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      {isLoading ? (
        <p className={Style.isLoading}>Loading...</p>
      ) : error ? (
        <p className={Style.isLoading}>Network Error: {error.message}</p>
      ) : (
        <div className={Style.Container}>
          {searchedCountries.length !== 0? searchedCountries.map((data, index) => {
            return (
              <CountryCard
                key={index}
                Flag={data.flags.png}
                Name={data.name.common}
                Population={data.population}
                Region={data.region}
                Capital={data.capital}
                nativeName={data.name.nativeName ? Object.entries(data.name.nativeName).map(([key, value]) => `${value?.common}`).join(', ') : 'N/A'}
                subRegion={data.subregion}
                topLevelDomain={data.tld}
                Currencies={data.currencies ? Object.values(data.currencies).map(({ name, symbol }) => `${name} (${symbol})`).join(', ') : 'N/A'}
                Languages={data.languages ? Object.values(data.languages).join(', ') : 'N/A'}
                borderCountries={data.borders}
              />
            );
          }) : <p className={Style.isLoading}>No Country Found!</p>}
        </div>
      )}
    </>
  );
};

export default Main;

