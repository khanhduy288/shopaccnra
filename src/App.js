import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>

      <Footer />

      {/* ZALO FLOAT */}
      <a
        href="https://zalo.me/0918110368"
        target="_blank"
        rel="noreferrer"
        className="zalo-float"
      >
        💬 Zalo
      </a>
    </Router>
  );
}

export default App;
