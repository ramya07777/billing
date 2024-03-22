import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Busfollow from "./Busfollow";
import Arrival from "./Arrival";
import Sales from "./Sales";
import Supplier from "./Supplier";
import Place from "./Place";
import Order from "./Order";
import Redeem from "./Redeem";

function App() {
  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/bus" element={<Busfollow />} />
        <Route path="/arrival" element={<Arrival />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/supplier" element={<Supplier />} />
        <Route path="/place" element={<Place />} />
        <Route path="/order" element={<Order />} />
        <Route path="/redeem" element={<Redeem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
