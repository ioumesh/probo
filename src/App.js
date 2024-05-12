import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainFooter from "./components/Footer/MainFooter";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import Event from "./Pages/Event";
import EventPage from "./Pages/EventPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/events" element={<Event />}></Route>
          <Route path="/read">Read Page</Route>
          <Route path="/cares">Probo Cares Page</Route>
          <Route path="/careers">Careers Page</Route>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/events/:match" element={<EventPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MainFooter />
      </div>
    </Router>
  );
}

export default App;
