import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
// import About from "./components/About";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="Azam" about="About" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Form heading="Enter text here" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
