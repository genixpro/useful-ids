import './App.css';
import Description from "../components/description/description";
import Header from "../components/header/header";
import ExampleIDGenerator from "../components/example-id-generator/example-id-generator";
import Footer from "../components/footer/footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Description />
        <ExampleIDGenerator />
        <Footer />
    </div>
  );
}

export default App;
