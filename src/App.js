import { Routes, Route } from "react-router-dom";
import { Home } from "./componenets/Home";
import { About } from "./componenets/About";
import { Navbar } from "./componenets/Navbar";
import { OrderSummary } from "./componenets/OrderSummary";
import { NoMAtch } from "./componenets/NoMatch";
function App() {
  return (
    <>
    <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='order-summary' element={<OrderSummary />} />
    <Route path='*' element={<NoMAtch />} />
   </Routes>
   </>
  );
}

export default App;
