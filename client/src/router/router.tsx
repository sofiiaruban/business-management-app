import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { ErrorPage } from "../pages/ErrorPage";
import { Companies, companyAction, companyLoader } from '../pages/Companies';
import { CompanyDetail, companyDetailedLoader } from "../pages/CompanyDetail";
import { Auth } from "../pages/Auth";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { Profile, profileLoader } from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Companies />
          </ProtectedRoute>
        ),
      },
      {
        path: 'auth',
        element: <Auth />,
      },
      {
        path: 'companies',
        action: companyAction,
        loader: companyLoader,
        element: (
          <ProtectedRoute>
            <Companies />
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
        path: 'user/:id',
        loader: profileLoader,
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);