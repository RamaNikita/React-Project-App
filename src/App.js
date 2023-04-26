import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Hotels from "./pages/Hotels";
import Header from "./components/NavBar";
import About from "./components/AboutUs";
import Contact from "./components/ContactUs";
import Airbnb from "./pages/Airbnb";
import Flight from "./pages/Flights";
function App() {
  return (
    <>
      <body>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/Hotels" element={<Hotels />} />
            <Route path="/Airbnb" element={<Airbnb />} />
            <Route path="/Flights" element={<Flight />} />
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
