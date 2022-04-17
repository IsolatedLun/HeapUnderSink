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
import { useEffect, useState } from "react";
import { useAppDispatch } from '../hooks';
import Ask from "./components/Layouts/Ask/Ask";
import TagsView from "./components/Layouts/TagsView";

function App() {
  const dispatch = useAppDispatch();
  const isLogged = useAuth()[1];
  const [authenticate] = useAuthenticateMutation();

  const [routes, setRoutes] = useState<any>();
  
  useEffect(() => {
    if(!isLogged)
      authenticate()
  }, [])

  useEffect(() => {
    if(isLogged)
    setRoutes(
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

        <Route path="/tags" element={
          <MainContainer containMisc={false}>
            <TagsView />
          </MainContainer>
        } />

        <Route path="/ask" element={
          <MainContainer containMisc={false}>
            <Ask />
          </MainContainer>
        } />

      </>
    )
  else
    setRoutes(
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

        <Route path="/tags" element={
          <MainContainer containMisc={false}>
            <TagsView />
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
  }, [isLogged])

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
