import Countries from "./home/Countries";
import SearchAndFilterBar from "./home/SearchAndFilterBar";

const Home = (): JSX.Element => {
  return (
    <>
      <SearchAndFilterBar />
      <Countries />
    </>
  );
};

export default Home;
