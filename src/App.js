import { Routes, Route } from "react-router-dom";
import { Home } from "./componenets/Home";
import { About } from "./componenets/About";
import { Navbar } from "./componenets/Navbar";
function App() {
  return (
    <>
    <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='about' element={<About />} />
   </Routes>
   </>
  );
}

export default App;
