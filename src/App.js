import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pricing from "./Pricing";
import Login from "./Login";
import Product from "./Product";
import MapApp from "./MapApp";
import Cities from "./Cities";
import Countries from "./Countries";
import CityInfo from "./CityInfo";

function App() {
  const data = [
    {
      id: 1,
      country: "Portugal",
      countryCode: "PT",
      city: "Lisbon",
      date: 31,
      mon: 10,
      year: 2027,
      note: "Portugal is my favorite city so far",
      lat: 98.68,
      lng: 6.87,
    },
    {
      id: 2,
      country: "Spain",
      countryCode: "ES",
      city: "Madrid",
      date: 15,
      mon: 7,
      year: 2027,
      note: "Madrid is my favorite city so far",
      lat: 68.68,
      lng: 76.87,
    },
    {
      id: 3,
      country: "France",
      countryCode: "FR",
      city: "Paris",
      date: 21,
      mon: 3,
      year: 2027,
      note: "France is my favorite city so far",
      lat: 18.68,
      lng: -26.87,
    },
  ];
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<MapApp />}>
            <Route path="cities" element={<Cities data={data} />} />
            <Route path="cities/:id" element={<CityInfo data={data} />} />
            <Route path="countries" element={<Countries data={data} />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
