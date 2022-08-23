import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";
import Quotes from "./components/Quotes/Quotes";
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/"> Anasayfa </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/quotes">Quates</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/character/:char_id" element={<Detail />}></Route>
        <Route path="/quotes" element={<Quotes />}></Route>
      </Routes>
    </>
  );
}

export default App;
