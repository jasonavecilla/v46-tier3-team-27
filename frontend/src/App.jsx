import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error, HomeLayout, Landing } from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [{ index: true, element: <Landing />, errorElement: <Error /> }],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
