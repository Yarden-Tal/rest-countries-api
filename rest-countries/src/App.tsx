import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ColorThemeContext";
import CountryPage from "./components/pages/country/CountryPage";
import Home from "./components/pages/Home";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:name" element={<CountryPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
