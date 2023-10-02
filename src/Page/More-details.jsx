import Style from './More-details.module.css';
import { BiSolidArrowToLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// CountryDetails.js

const MoreDetails = () => {
    const selectedCountry = useSelector((state) => state.func);
    const location = selectedCountry;
console.log(location)
  return (
    <div className="country-details">
      <button>
        <Link to="/"> {/* Link to go back to the main page */}
          <BiSolidArrowToLeft /> Back
        </Link>
      </button>
      {location !== null || undefined ? <div className="details-content">
        <div className="details-left">
          <img src={location.selectedCountry.Flag} alt={`${location.selectedCountry.Name} Flag`} />
        </div>
        <div className="details-right">
          <h2>{location.selectedCountry.Name}</h2>
          <ul>
            <li>Native Name: {location.selectedCountry.nativeName}</li>
            <li>Population: {location.selectedCountry.Population}</li>
            <li>Region: {location.selectedCountry.Region}</li>
            <li>Sub Region: {location.selectedCountry.subRegion}</li>
            <li>Capital: {location.selectedCountry.Capital}</li>
          </ul>
          <ul>
            {/* <li>Top Level Domain: {topLevelDomain}</li> */}
            {/* <li>Currencies: {location.selectedCountry.Currencies}</li> */}
            <li>Languages: {location.Languages ? Object.values(location.Languages).join(', ') : 'N/A'}</li>
          </ul>
          <p>Border Countries:</p>
          {/* <ul>
            {location.borderCountries.map((country, index) => (
              <li key={index}>
                <Link to={`/country/${country}`}>{country}</Link>
              </li>
            ))}
          </ul> */}
        </div>
      </div> : ''}
    </div>
  );
}

export default MoreDetails;
