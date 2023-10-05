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
import { PostProvider } from "./PostProvider";
import Form from "./Form";

function App() {
 
  return (
    <PostProvider>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/app" element={<MapApp />}>
              <Route path="cities" element={<Cities />} />
              <Route path="cities/:id" element={<CityInfo />} />
              <Route path="countries" element={<Countries />} />
              <Route path="form" element={<Form/>}/>
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </PostProvider>
  );
}

export default App;
