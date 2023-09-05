import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LibraryPage from "./pages/LibraryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/library",
    element: <LibraryPage />,
  },
]);

function RouterContainer() {
  return <RouterProvider router={router} />;
}

export default RouterContainer;
