import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import ContactPart from "./Pages/ContactPart.jsx";
import SignUp from "./Pages/SignUp.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactPart />} />
      <Route path="/signup" element={<SignUp />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;