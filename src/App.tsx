import { BrowserRouter, Route, Routes } from "react-router-dom";
import GalaxyBackground from "./components/galaxy-bg/GalaxyBackground";
//Pages
import { HomePage } from "./pages/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <GalaxyBackground />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
