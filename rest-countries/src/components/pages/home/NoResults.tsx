import noResultsSvg from "../../../assets/noResults.svg";
import "../../../styles/components/noResults.scss"

const NoResults = (): JSX.Element => {
  return (
    <div>
      <div className="nr-txt">No results. <strong>Try again!</strong></div>
      <div className="img-wrapper">
        <img className="heartbeat" src={noResultsSvg} alt="no-results" />
      </div>
    </div>
  );
};

export default NoResults;
