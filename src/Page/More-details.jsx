import Style from './More-details.module.css';
import { BiSolidArrowToLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MoreDetails = () => {
  const selectedCountry = useSelector((state) => state.func);
  const isLightModeActive = useSelector(state => state.ui.lightModeActive)
  const location = selectedCountry;
  
  return (
    <div className={Style.moreDetails}>
      
        <Link className={`${Style.backBtn} ${isLightModeActive ? Style.lightModeBg : Style.darkModeBg} ${isLightModeActive ? Style.lightModeText : Style.darkModeText}`} to="/"> {/* Link to go back to the main page */}
          <BiSolidArrowToLeft className={Style.backArrow} /> Back
        </Link>
     
      {location.selectedCountry.Name !== undefined ? <div className={Style.countryDetails}>
        <div className={Style.leftPart}>
          <img className={Style.flagImg} src={location.selectedCountry.Flag} alt={`${location.selectedCountry.Name} Flag`} />
        </div>
        <div className={Style.detailsRight}>
          <h2>{location.selectedCountry.Name}</h2>
          <div className={Style.countrydetail}>
            <ul>
            <li><span className={Style.header}>Native Name:</span> {location.selectedCountry.nativeName}</li>
            <li><span className={Style.header}>Population:</span> {location.selectedCountry.Population}</li>
            <li><span className={Style.header}>Region:</span> {location.selectedCountry.Region}</li>
            <li><span className={Style.header}>Sub Region:</span> {location.selectedCountry.subRegion}</li>
            <li><span className={Style.header}>Capital:</span> {location.selectedCountry.Capital}</li>
          </ul>
          <ul className={Style.rightList}>
            <li><span className={Style.header}>Top Level Domain:</span> {location.selectedCountry.topLevelDomain !== undefined ? location.selectedCountry.topLevelDomain.map((data, index) => {
               return <span key={index}>{data}</span> 
            }) : "N/A"}</li>
            <li><span className={Style.header}>Currencies:</span> {location.selectedCountry.Currencies}</li>
            <li><span className={Style.header}>Languages:</span> {location.selectedCountry.Languages}</li>
          </ul>
          </div>
           <>
           <p className={Style.header}>Border Countries:</p>
          <ul className={Style.borderCountriesContainer}>
              {location.selectedCountry.borderCountries !== undefined ? location.selectedCountry.borderCountries.map((country, index) => (
                <li className={`${Style.borderCountries} ${isLightModeActive ? Style.lightModeBg : Style.darkModeBg} ${isLightModeActive ? Style.lightModeText : Style.darkModeText}`} key={index}>
                  <Link className={Style.link} to={`/country/${country}`}>{country}</Link>
                </li>
              )) : <p>No border country found.</p>}
          </ul>
          </>
        </div>
      </div> : <h2 style={{textAlign: 'center'}}>No data found!</h2>}
    </div>
  );
}

export default MoreDetails;
