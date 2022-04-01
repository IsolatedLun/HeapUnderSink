import Navbar from "./components/layouts/Navbar";
import { Question } from "./components/questionView/Question";
import Questions from "./components/questionView/Questions";

function App() {

  return (
    <>
      <Navbar />
      <main className="main-container" id="main-container">
        <Questions />
      </main>
    </>
  )
}

export default App;
