import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin";
import Home from "./routes/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:coinId/*" element={<Coin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
