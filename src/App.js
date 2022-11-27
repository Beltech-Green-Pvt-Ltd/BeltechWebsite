import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";

//Importing Component
const Home = lazy(() => import("./container/HomePage"));
const Carrer = lazy(() => import("./container/CarrerPage"));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrer" element={<Carrer />} />
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
