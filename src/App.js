import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
function App() {
  return (
    <>
      <Navbar title="Azam" about="Heyy you" />
      <div className="container my-3">
        <Form heading="Enter text here" />
      </div>
    </>
  );
}

export default App;
