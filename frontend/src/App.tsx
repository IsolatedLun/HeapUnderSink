import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/layouts/Home";
import Navbar from "./components/layouts/navbar/Navbar";
import { store } from '../store';

function App() {

  return (
    <Provider store={store}>
      <Router>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

        </Routes>

      </Router>
    </Provider>
  )
}

export default App;
