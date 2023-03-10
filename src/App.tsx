import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./pages/website/About/About";
import Home from "./pages/website/Home/Home";
import News from "./pages/website/News/News";
import Schools from "./pages/website/schools/Schools";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<News />} path="/news" />
        <Route element={<Schools />} path="/schools" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
