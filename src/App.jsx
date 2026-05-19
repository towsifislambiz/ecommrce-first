import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactPart from "./Pages/ContactPart";
import SingUp from "./Pages/SingUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/ContactPart" element={<ContactPart />} />
      <Route path="/signup" element={<SingUp />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;