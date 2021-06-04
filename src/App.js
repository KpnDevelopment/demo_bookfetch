import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Componets/Form";
import SugarCalc from "./Componets/SugarCalc";
import Sum from "./Componets/Sum";

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      {/* <Sum /> */}
      <SugarCalc />
    </div>
  );
}

export default App;
