import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./container/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import SpinnerDiv from "./components/LoadingContainer";

//Importing Component
const Home = lazy(() => import("./container/HomePage"));
const Carrer = lazy(() => import("./container/CarrerPage"));
const Team = lazy(() => import("./container/TeamPage/"));
const Product = lazy(() => import("./container/ProductPage"));
const Apply  = lazy(() => import("./container/ApplyPage"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<div><SpinnerDiv /></div>}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Carrer />} />
          <Route path="/job/:jobId" element={<h1>jobPage</h1>} />
          <Route path="/team" element={<Team />}/>
          <Route path="/contactus" element={<ContactUs />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/apply" element={<Apply />}/>
      </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
