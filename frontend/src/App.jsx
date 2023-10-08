import "../node_modules/video-react/dist/video-react.css"; // import css
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer } from "react-toastify";
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
