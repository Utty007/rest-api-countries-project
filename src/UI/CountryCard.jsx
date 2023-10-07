/* eslint-disable react/prop-types */
import Style from './CountryCard.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { funcActions } from '../Store/func-slice';

const CountryCard = (props) => {
  const dispatch = useDispatch();
  const isLightModeActive = useSelector(state => state.ui.lightModeActive)

  const handleCountryClick = () => {
    // Dispatch the action to set the selected country data in Redux.
    dispatch(
      funcActions.setSelectedCountry({
        Flag: Flag,
        Name: Name,
        Population: Population,
        Region: Region,
        Capital: Capital,
        nativeName: nativeName,
        subRegion: subRegion,
        topLevelDomain: topLevelDomain,
        Currencies: Currencies,
        Languages: Languages,
        borderCountries: borderCountries 
      })
    );
  };

  const { Flag, Name, Population, Region, Capital, nativeName, subRegion, topLevelDomain, Currencies, Languages, borderCountries } = props;
  
  return (
    <Link
        to={{
        pathname: `/country/${Name}`
      }}
      className={Style.countryLink}
      onClick={handleCountryClick}
      >
    <div className={`${Style.CountryCard} ${isLightModeActive ? Style.lightModeBg : Style.darkModeBg} ${isLightModeActive ? Style.lightModeText : Style.darkModeText}`}>
      <div className={Style.Flag}>
        <img src={Flag} />
      </div>
      <div className={Style.Text}>
        <h2>{Name}</h2>
        <p>
          <span>Population:</span> {Population}
        </p>
        <p>
          <span>Region:</span> {Region}
        </p>
        <p>
          <span>Capital:</span> {Capital}
        </p>
      </div>
      </div>
      </Link>
  );
};

export default CountryCard;


        
      
