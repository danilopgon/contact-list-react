import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddContact from "./pages/AddContact";

import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
