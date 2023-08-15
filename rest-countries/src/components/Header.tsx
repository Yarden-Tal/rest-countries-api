import {useNavigate} from "react-router-dom";
import { useTheme } from "../context/ColorThemeContext";
import moonSvg from "../assets/moon.svg";
import moonWhiteSvg from "../assets/moon-white.svg";
import "../styles/components/header.scss";
import "../styles/common.scss";

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/")
    window.scrollTo({top: 0})
  }

  const { toggleTheme, isDarkMode } = useTheme();
  
  return (
    <header className={isDarkMode ? "dark dark-shadow" : ""}>
      <div onClick={() => handleClick()} className="main-title">Where in the world?</div>
      <button className={isDarkMode ? "dark" : ""} onClick={() => {toggleTheme()}}>
        <span>
          <img className={isDarkMode ? "theme-btn-dark" : ""} src={isDarkMode ? moonWhiteSvg : moonSvg} />
        </span>{" "}
        <span className={isDarkMode ? "dark" : ""}>{ isDarkMode ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </header>
  );
};

export default Header;
