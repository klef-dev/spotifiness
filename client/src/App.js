import "./App.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <div style={{ minHeight: "200vh" }}></div>
      </main>
    </div>
  );
}

export default App;
