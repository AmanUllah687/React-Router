import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from "./componenets/Home";
// import { About } from "./componenets/About";

import { Navbar } from "./componenets/Navbar";
import { OrderSummary } from "./componenets/OrderSummary";
import { NoMAtch } from "./componenets/NoMatch";
import { Products } from "./componenets/Products";
import { FeaturedProducts } from "./componenets/FeautredProducts";
import { NewProducts } from "./componenets/NewProducts";
import { Users } from "./componenets/Users";
import { UserDetail } from "./componenets/UserDetail";
import { Admin } from "./componenets/Admin";
import { Profile } from './componenets/Profile';
import { AuthProvider } from './componenets/auth';
import { Login } from './componenets/Login';
import { ReqiuredAuth } from './componenets/RequiredAuth';
const LazyAbout = React.lazy(() => import('./componenets/About'))
function App() {
  return (
    <AuthProvider>
    <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='about' element={
      <React.Suspense fallback='Loading ....'>
        <LazyAbout /> 
        </React.Suspense>} />
    <Route path='order-summary' element={<OrderSummary />} />
    <Route path='products' element={<Products />}>
    <Route index element={<FeaturedProducts/>} />
    <Route path='featured' element={<FeaturedProducts />} />
    <Route path='new' element={<NewProducts />} />

    </Route>
    <Route path='users' element={<Users />}>
    <Route path=':userId' element={<UserDetail />} />
    <Route path='admin' element={<Admin />} />
    </Route>
    <Route path='profile' element={<ReqiuredAuth><Profile /></ReqiuredAuth>} />
    <Route path='login' element={<Login />} />
    <Route path='*' element={<NoMAtch />} />
   </Routes>
   </AuthProvider>
  );
}

export default App;
