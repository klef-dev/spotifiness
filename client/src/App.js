import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Home } from "./views/Home";
import { Search } from "./views/Search";

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search" exact element={<Search />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
