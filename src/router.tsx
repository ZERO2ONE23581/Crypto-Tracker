import { HashRouter, Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin/Coin";
import Home from "./routes/Home";

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:coinId/*" element={<Coin />}></Route>
      </Routes>
    </HashRouter>
  );
}
