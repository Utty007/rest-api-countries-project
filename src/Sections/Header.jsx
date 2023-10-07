import { BiMoon } from "react-icons/bi";
import Styles from './Header.module.css';
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../Store/ui-slice";

const Header = () => {
  const lightMode = useSelector(state => state.ui.lightModeActive);
  const toggleLightMode = useDispatch()

  const toggleLightModeHandler = () => {
    toggleLightMode(uiActions.toggle())
  }
  return (
    <div className={`${Styles.Header} ${lightMode ? Styles.lightMode : Styles.darkMode}`}>
      <span>
        <p>Where in the world?</p>
      </span>
      <span className={Styles.Icon} onClick={toggleLightModeHandler}>
        <BiMoon /> {lightMode ? <p>Dark Mode</p> : <p>Light Mode</p>}
      </span>
    </div>
  );
};

export default Header;
