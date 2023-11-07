import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

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

import "../node_modules/video-react/dist/video-react.css"; // import css
import "react-toastify/dist/ReactToastify.css";

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
  const fontFamily = useSelector((state) => state.font.fontFamily);
  const fontSize = useSelector((state) => state.font.fontSize);

  return (
    <>
      <Helmet>
        <style>{`html { font-size: ${fontSize}px; font-family: ${fontFamily}; }`}</style>
      </Helmet>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        transition={Slide}
        hideProgressBar={true}
        autoClose={1500}
      />
    </>
  );
};

export default App;
