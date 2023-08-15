import { useNavigate } from "react-router-dom";
import backSvg from "./../../../assets/back.svg";
import backWhiteSvg from "./../../../assets/back-white.svg";
import "./../../../styles/components/backButton.scss";
import { useTheme } from "../../../context/ColorThemeContext";

const BackButton = (): JSX.Element => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  return (
    <div className={isDarkMode ? "back-btn dark" : "back-btn"} onClick={() => navigate("/")}>
      <span className="inner">
        <span className="img-wr">
          <img src={isDarkMode ? backWhiteSvg : backSvg} alt="<-" />
        </span>
        <span>Back</span>
      </span>
    </div>
  );
};

export default BackButton;
