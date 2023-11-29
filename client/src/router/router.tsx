import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { ErrorPage } from "../pages/ErrorPage";
import { Home } from "../pages/Home";
import { Company } from "../pages/Company";
import { Auth } from "../pages/Auth";
import { ProtectedRoute } from "../components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
            <Home />
        ),
      },
      {
        path: 'company/:id',
        element: (
          <ProtectedRoute>
            <Company />
          </ProtectedRoute>
        ),
      },
      {
        path: 'auth',
        element: <Auth />,
      },
    ],
  },
]);