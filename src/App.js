import "./App.css";
import Navbar from "./components/Navbar";
// import Form from "./components/Form";
import About from "./components/About";
function App() {
  return (
    <>
      <Navbar title="Azam" about="About" />
      <div className="container my-3">
        {/* <Form heading="Enter text here" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
