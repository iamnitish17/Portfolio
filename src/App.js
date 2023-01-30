import Navbar from "./components/Navbar/Navbar";
import './App.css';
import { Intro } from "./components/Intro/Intro";
import { Services } from "./components/Services/Services";
import { Experience } from "./components/Experience/Experience";
import { Work } from "./components/Work/Work";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Intro />
     <Services/>
     <Experience/>
     <Work/>
    </div>
  );
}

export default App;
