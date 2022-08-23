import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";
import QuoteDetail from "./components/QuoteDetail/QuoteDetail";
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
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/character/:char_id" element={<Detail />}></Route>
        <Route path="/quotes" element={<Quotes />}></Route>
        <Route path="/quote/:quote_id" element={<QuoteDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
