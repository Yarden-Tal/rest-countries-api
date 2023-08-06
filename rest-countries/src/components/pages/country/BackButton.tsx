import { useNavigate } from "react-router-dom";
import backSvg from "./../../../assets/back.svg";

const BackButton = (): JSX.Element => {
  const navigate = useNavigate();


  return <div onClick={() => navigate("/")}>
    <span><img src={backSvg} alt="<-" /></span><span>Back</span>
  </div>;
};

export default BackButton;
