import { useLocation } from "react-router-dom";
import moonSvg from "../assets/moon.svg";
import "../styles/header.scss";
import BackButton from "./pages/country/BackButton";

const Header = (): JSX.Element => {
  const location = useLocation();
  const isHomePage: boolean = location.pathname === "/";

  return isHomePage ? (
    <header>
      <div className="main-title">Where in the world?</div>
      <button>
        <span>
          <img src={moonSvg} />
        </span>{" "}
        Dark Mode
      </button>
    </header>
  ) : <BackButton />;
};

export default Header;
