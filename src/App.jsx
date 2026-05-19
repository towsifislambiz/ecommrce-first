import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.js";
import ContactPart from "./pages/ContactPart.jsx";
import SignUp from "./pages/SignUp.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/ContactPart" element={<ContactPart />} />
      <Route path="/signup" element={<SignUp />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};
  
export default App;