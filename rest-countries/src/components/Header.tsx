import {useNavigate} from "react-router-dom";
import moonSvg from "../assets/moon.svg";
import "../styles/header.scss";
import { useTheme } from "../context/ColorThemeContext";

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/")
    window.scrollTo({top: 0})
  }

  const { toggleTheme, isDarkMode } = useTheme();

  
  return (
    <header>
      <div onClick={() => handleClick()} className="main-title">Where in the world?</div>
      <button onClick={() => {toggleTheme();   console.log(isDarkMode);}}>
        <span>
          <img src={moonSvg} />
        </span>{" "}
        <span>Dark Mode</span>
      </button>
    </header>
  );
};

export default Header;
