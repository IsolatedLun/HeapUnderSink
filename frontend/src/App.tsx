import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Layouts/Home";
import Navbar from "./components/Layouts/Navbar/Navbar";
import ViewQuestion from "./components/ViewQuestion/ViewQuestion";
import MainContainer from "./components/Containers/MainContainer";
import Footer from "./components/Layouts/Footer";
import Login from "./components/Layouts/Auth/Login";
import Popup from "./components/Layouts/Popup/Popup";
import SignUp from "./components/Layouts/Auth/SignUp";
import { useAuthenticateMutation } from "./services/authService";
import { useAuth } from "./hooks/useAuth";
import { useEffect } from "react";
import { useAppDispatch } from '../hooks';

function App() {
  const dispatch = useAppDispatch();
  const isLogged = useAuth()[1];
  const [authenticate] = useAuthenticateMutation();

  let routes;
  
  useEffect(() => {
    if(!isLogged)
      authenticate()
  }, [])

  if(isLogged)
    routes = (
      <>
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
      </>
    )
  else
    routes = (
      <>
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

        <Route path="/auth/login" element={
          <MainContainer containMisc={false}>
            <Login />
          </MainContainer>
        } />

        <Route path="/auth/signup" element={
          <MainContainer containMisc={false}>
            <SignUp />
          </MainContainer>
        } />
      </>
    )

  return (
      <Router>

        <div>
          <Navbar />

          <Routes>

            {
              routes
            }

          <Route path='*' element={<p>Page not found.</p>} />
          </Routes>
        </div>
        
        <Popup />
        <Footer />

      </Router>
  )
}

export default App;
