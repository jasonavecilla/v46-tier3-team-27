import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Error,
  HomeLayout,
  Landing,
  Menu,
  ProtectedRoute,
  Recipes,
  SingleRecipe,
} from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing />, errorElement: <Error /> },
      { path: "/recipes", element: <Recipes />, errorElement: <Error /> },
      {
        path: "/recipes/:id",
        element: <SingleRecipe />,
        errorElement: <Error />,
      },
      {
        path: "/menu",
        element: (
          <ProtectedRoute>
            <Menu />
          </ProtectedRoute>
        ),
        errorElement: <Error />,
      },
      { path: "/about", element: <About />, errorElement: <Error /> },
    ],
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
