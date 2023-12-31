import { BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";


function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element= {<Home />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
