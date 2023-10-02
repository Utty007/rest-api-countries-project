import { BiMoon } from "react-icons/bi";
import Styles from './Header.module.css';

const Header = (props) => {
  
  return (
    <div className={Styles.Header}>
      <span>
        <p>Where in the world?</p>
      </span>
      <span className={Styles.Icon} onClick={props.onClick}>
        <BiMoon /> <p>Light Mode</p>
      </span>
    </div>
  );
};

export default Header;
