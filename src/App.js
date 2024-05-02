import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainFooter from "./components/Footer/MainFooter";
import Home from "./Pages/Home";
import Event from "./Pages/Event";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* Your route components go here */}
        <Routes>
          <Route path="/events" Component={Event}></Route>
          <Route path="/read">Read Page</Route>
          <Route path="/cares">Probo Cares Page</Route>
          <Route path="/careers">Careers Page</Route>
          <Route path="/" exact Component={Home}></Route>
        </Routes>
        <MainFooter />
      </div>
    </Router>
  );
}

export default App;
