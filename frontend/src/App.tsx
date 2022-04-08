import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Layouts/Home";
import Navbar from "./components/Layouts/Navbar/Navbar";
import { store } from '../store';
import ViewQuestion from "./components/ViewQuestion/ViewQuestion";
import MainContainer from "./components/Containers/MainContainer";
import Footer from "./components/Layouts/Footer";

function App() {

  return (
    <Provider store={store}>
      <Router>

        <div>
          <Navbar />

          <Routes>

            <Route path="/" element={
              <MainContainer containMisc={true}>
                <Home />
              </MainContainer>
            } />
            
            <Route path="/questions/:id/:title" element={
              <MainContainer containMisc={true}>
                <ViewQuestion />
              </MainContainer>
            } />

          </Routes>
        </div>

        <Footer />

      </Router>
    </Provider>
  )
}

export default App;
