import "./App.css";
import Navbar from "./pages/Navbar";
import DLP from "./pages/DLP";
import Reflection from "./pages/Reflection";
import Exam from "./pages/Exam";
import Documentation from "./pages/Documentation";
import Footer from "./pages/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App flex-row">
      <Navbar />
      <main className="w-inherit h-100 x-hide">
        <Home/>
        <DLP />
        <Reflection />
        <Exam />
        <Documentation />
        <Footer />
      </main>
    </div>
  );
}

export default App;
