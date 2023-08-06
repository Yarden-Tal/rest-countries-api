// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryPage from "./components/pages/country/CountryPage";
import Home from "./components/pages/Home";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:name" element={<CountryPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
