//import logo from './logo.svg';
import './App.css';
import Aboutus from './component/Aboutus';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Navbar from "./component/Navbar";
import Projet from "./component/Projet.js";



function App() {
  return (
    <div className="App">
     <Navbar/>
     <Aboutus />
      <Projet />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
