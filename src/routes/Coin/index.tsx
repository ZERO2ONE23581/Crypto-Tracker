import { Route, Routes } from "react-router-dom";
import Chart from "./Chart";
import Price from "./Price";

function Coin() {
  return (
    <>
      <div>Coin</div>
      <Routes>
        <Route path="Chart" element={<Chart />}></Route>
        <Route path="Price" element={<Price />}></Route>
      </Routes>
    </>
  );
}

export default Coin;
