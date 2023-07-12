import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import { AppProvider } from "./context/AppContext.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/">
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddContact />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
