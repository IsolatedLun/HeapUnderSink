import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/layouts/Home";
import Navbar from "./components/layouts/navbar/Navbar";
import { store } from '../store';
import ViewQuestion from "./components/questionView/ViewQuestion";
import MainContainer from "./components/misc/MainContainer";
import LogIn from "./components/layouts/forms/LogIn";
import Footer from "./components/layouts/Footer";

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

            /* Auth Routes */
            <Route path='/auth/login' element={
            <MainContainer containMisc={false}>
              <LogIn />
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
