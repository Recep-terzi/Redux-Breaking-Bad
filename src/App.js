import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/character/:char_id" element={<Detail />}></Route>
      </Routes>
    </>
  );
}

export default App;
