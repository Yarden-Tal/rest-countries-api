import { useState } from "react";
import BackButton from "./components/BackButton";
import Countries from "./components/Countries";
import Country from "./components/Country";
import Header from "./components/Header";
import SearchAndFilterBar from "./components/SearchAndFilterBar";

const App = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="App">
      <Header />
      <main>
        {!isExpanded && <SearchAndFilterBar />}
        {!isExpanded && <Countries />}
        {isExpanded && <BackButton />}
        {isExpanded && <Country />}
      </main>
      {/* if main view - searchfilterbar all countries */}
      {/* If chosen country Single country */}
    </div>
  );
};

export default App;
