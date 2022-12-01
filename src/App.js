import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./container/ContactUs";

//Importing Component
const Home = lazy(() => import("./container/HomePage"));
const Carrer = lazy(() => import("./container/CarrerPage"));
const Team = lazy(() => import("./container/TeamPage/"));
const Product = lazy(() => import("./container/ProductPage"));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Carrer />} />
          <Route path="/team" element={<Team />}/>
          <Route path="/contactus" element={<ContactUs />}/>
          <Route path="/product" element={<Product />}/>
      </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
