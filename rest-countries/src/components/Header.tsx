import moonSvg from "../assets/moon.svg";

import "../styles/header.scss";

const Header = (): JSX.Element => {
  return (
    <header>
      <div className="main-title">Where in the world?</div>
      <button>
        <span>
          <img src={moonSvg} />
        </span>{" "}
        Dark Mode
      </button>
    </header>
  );
};

export default Header;
