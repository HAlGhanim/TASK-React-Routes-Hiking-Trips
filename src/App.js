import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div id="page-top">
      <Nav />
      <Routes>
        {/* <Route exact path="/nav" element={} /> */}
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/trip-list" element={<TripsList />} />
        <Route exact path="/trip-details/:tripSlug" element={<TripDetail />} />
      </Routes>
    </div>
  );
}

export default App;
