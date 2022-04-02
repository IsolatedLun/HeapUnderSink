import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/layouts/Home";
import Navbar from "./components/layouts/Navbar";

function App() {

  return (
    <>
      <Router>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

        </Routes>

      </Router>
    </>
  )
}

export default App;
