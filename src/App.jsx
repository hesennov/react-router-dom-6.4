import React, { lazy, Suspense } from "react";

const Contact = lazy(() => import("./Contact"));
const Home = lazy(() => import("./Home"));
const Data = lazy(() => import("./Data"));
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

export default function App(props) {
  const router1 = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/data" elemenent={<Data />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );

  return (
    <div className="App">
      {/* <h1>Hello React0000000000</h1>
      <h2>start editing to see some magic happen!</h2> */}
      <RouterProvider router={router1} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/data">Data</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
