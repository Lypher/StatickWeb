import "./App.css";
import Navbar from "./components/Navbar";
import Boxes from "./components/Boxes";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Boxes />
    </div>
  );
}

export default App;
