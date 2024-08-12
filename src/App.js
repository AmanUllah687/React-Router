import { Routes, Route } from "react-router-dom";
import { Home } from "./componenets/Home";
import { About } from "./componenets/About";
import { Navbar } from "./componenets/Navbar";
import { OrderSummary } from "./componenets/OrderSummary";
function App() {
  return (
    <>
    <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='order-summary' element={<OrderSummary />} />
   </Routes>
   </>
  );
}

export default App;
