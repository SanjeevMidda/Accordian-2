import "./index.css";
import AccordianItem from "./components/AccordianItem";

function App() {
  return (
    <div className="App">
      <div className="accordianContainer">
        <AccordianItem letter="A" />
        <AccordianItem letter="B" />
        <AccordianItem letter="C" />
      </div>
    </div>
  );
}

export default App;
