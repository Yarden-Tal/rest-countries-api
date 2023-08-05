// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryPage from "./components/pages/country/CountryPage";
import Home from "./components/pages/Home";
// Components
import Header from "./components/Header";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:name" element={<CountryPage />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
};

export default App;
