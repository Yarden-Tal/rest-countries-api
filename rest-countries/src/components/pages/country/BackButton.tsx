import { useNavigate } from "react-router-dom";
import backSvg from "./../../../assets/back.svg";
import "./../../../styles/backButton.scss";

const BackButton = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="back-btn" onClick={() => navigate("/")}>
      <span>
        <img src={backSvg} alt="<-" />
      </span>
      <span>Back</span>
    </div>);
};

export default BackButton;
