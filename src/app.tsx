import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Home, ContactUs } from "./pages";
import { paths } from "./constants/index.js";
import Layout from "./layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Layout />} path={paths.home}>
        <Route index element={<Home />} path={paths.home}></Route>
        <Route element={<ContactUs />} path={paths.contactUs}></Route>
      </Route>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
