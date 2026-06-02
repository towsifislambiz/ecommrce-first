import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ContactPart from "./pages/ContactPart.jsx";
import SignUp from "./pages/SignUp.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import Login from "./pages/Login.jsx";
import Account from "./pages/Account.jsx";
import Wish from "./pages/Wish.jsx";
import Cart from "./pages/Cart.jsx"
import CheckOut from "./pages/CheckOut.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/ContactPart" element={<ContactPart />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/ProductPage" element={<ProductPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Account" element={<Account />} />
      <Route path="/Wish" element={<Wish/>} />
      <Route path="/Cart" element={<Cart/>} />
      <Route path="/CheckOut" element={<CheckOut/>} />
      
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;

 
};
  
export default App;