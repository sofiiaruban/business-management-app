import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { ErrorPage } from "../pages/ErrorPage";
import { Home, companyAction, companyLoader } from "../pages/Home";
import { CompanyDetail, companyDetailedLoader } from "../pages/CompanyDetail";
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
        element: <Home />,
      },
      {
        path: 'companies',
        action: companyAction,
        loader: companyLoader,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: 'companies/:id',
        loader: companyDetailedLoader,
        element: (
          <ProtectedRoute>
            <CompanyDetail />
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