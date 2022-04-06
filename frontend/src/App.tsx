import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/layouts/Home";
import Navbar from "./components/layouts/navbar/Navbar";
import { store } from '../store';
import ViewQuestion from "./components/questionView/ViewQuestion";
import MainContainer from "./components/misc/MainContainer";

function App() {

  return (
    <Provider store={store}>
      <Router>

        <Navbar />

        <Routes>

          <Route path="/" element={
            <MainContainer>
              <Home />
            </MainContainer>
          } />
          
          <Route path="/questions/:id/:title" element={
            <MainContainer>
              <ViewQuestion />
            </MainContainer>
          } />

        </Routes>

      </Router>
    </Provider>
  )
}

export default App;
