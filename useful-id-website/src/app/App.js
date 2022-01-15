import './App.css';
import Description from "../components/description/description";
import Header from "../components/header/header";
import ExampleIDGenerator from "../components/example-id-generator/example-id-generator";

function App() {
  return (
    <div className="App">
        <Header />
        <Description />
        <ExampleIDGenerator />
    </div>
  );
}

export default App;
