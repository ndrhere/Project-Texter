import "./App.css";
import React from "react";
import Navbar from "./Component/Navbar";
import Textform from "./Component/Textform";
import { useState } from "react";
import Alert from "./Component/Alert";
import About from "./Component/About";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgba(52,53,65,1)";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar toggleMode={toggleMode} mode={mode} />

        <Alert alert={alert} />

        <div className=" container my-3 ">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <Textform mode={mode}
                alert={alert}
                showAlert={showAlert} />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
