import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Hotels from "./pages/Hotels";
import Header from "./components/NavBar";
import About from "./components/AboutUs";
import Contact from "./components/ContactUs";
function App() {
  return (
    <>
      <body>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/Hotels" element={<Hotels />} />
            <Route path="/AboutUs" element={<About />} />
            <Route path="/ContactUs" element={<Contact />} />
            <Route path="/HomePage" element={<HomePage />} />
          </Routes>
        </div>
      </body>
    </>
  );
}

export default App;
