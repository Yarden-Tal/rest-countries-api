import noResultsSvg from "../../../assets/noResults.svg"

const NoResults = (): JSX.Element => {
  return (
    <div>
      <div>No results. Try again!</div>
      <img src={noResultsSvg} alt="no-results" />
    </div>
  )
}

export default NoResults