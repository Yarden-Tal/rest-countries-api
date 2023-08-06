// Components
import Header from "../Header";
import Countries from "./home/Countries";
import SearchAndFilterBar from "./home/SearchAndFilterBar";

const Home = (): JSX.Element => {

  return (
    <>
      <Header />
      <main>
        <SearchAndFilterBar />
        <Countries />
      </main>
    </>
  );
};

export default Home;
