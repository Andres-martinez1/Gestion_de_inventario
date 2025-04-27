import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "../components/atomic/templates/NotFound";
import LoginPage from "../pages/auth/LoginPage";
import AuthLayout from "../layouts/AuthLayout";
import ProtectedRoute from "./ProtectedRoute";
import AdminLayout from "../layouts/AdminLayout";
import AdminPage from "../pages/admin/AdminPage";
import AdminStatsPage from "../pages/admin/AdminStatsPage";
import AdminReports from "../pages/admin/AdminReports";
import RedirectIfAuthenticated from "./RedirectIfAuthenticated";
import { useAuth } from "../hooks/use-auth";
import { routes } from "./Routes";
import AdminProfile from "../pages/admin/AdminProfile";
import AdminProducts from "../pages/admin/AdminProducts";
import AdminWhereHousePage from "../pages/admin/AdminWhereHousePage";
import AdminUsersPage from "../pages/admin/AdminUsers";
import AdminNotificationsPage from "../pages/admin/AdminNotifications";
import AdminHelperPage from "../pages/admin/AdminHelper";
import AdminWhereHouseDetailPage from "../pages/admin/AdminWhereHouseDetailPage";
import AdminGastronomyPage from "../pages/admin/AdminGastronomyPage";
import AdminAgroPage from "../pages/admin/AdminAgroPage";
import AdminCoffePage from "../pages/admin/AdminCoffePage";
import AdminReportsS from "../pages/admin/AdminReportsS";
import AdminReportsI from "../pages/admin/AdminReportsI";
import AdminReportsT from "../pages/admin/AdminReportsT";
import AdminReportsV from "../pages/admin/AdminReportsV";
import AdminDetalleEntrada from "../pages/admin/AdminDetalleEntrada";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path={routes.home}
        element={
          <RedirectIfAuthenticated isAuthenticated={isAuthenticated}>
            <Navigate to={routes.login} />
          </RedirectIfAuthenticated>
        }
      />
      <Route element={<AuthLayout />}>
        <Route
          path={routes.login}
          element={
            <RedirectIfAuthenticated isAuthenticated={isAuthenticated}>
              <LoginPage />
            </RedirectIfAuthenticated>
          }
        />
      </Route>
      <Route element={<AdminLayout />}>
        <Route
          path={routes.admin}
          element={
            <ProtectedRoute
              component={AdminPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.stats}
          element={
            <ProtectedRoute
              component={AdminStatsPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.StaticE}
          element={
            <ProtectedRoute
              component={AdminStatsPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />{" "}
        <Route
          path={routes.StacticS}
          element={
            <ProtectedRoute
              component={AdminStatsPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />{" "}
        <Route
          path={routes.StacticT}
          element={
            <ProtectedRoute
              component={AdminStatsPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />{" "}
        <Route
          path={routes.StacticI}
          element={
            <ProtectedRoute
              component={AdminStatsPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
          <Route
          path={routes.StacticV}
          element={
            <ProtectedRoute
              component={AdminStatsPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.detalles}
          element={
            <ProtectedRoute
              component={AdminDetalleEntrada}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.entrada}
          element={
            <ProtectedRoute
              component={AdminReports}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.salida}
          element={
            <ProtectedRoute
              component={AdminReportsS}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.inventario}
          element={
            <ProtectedRoute
              component={AdminReportsI}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.trazabilidad}
          element={
            <ProtectedRoute
              component={AdminReportsT}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.vencimientos}
          element={
            <ProtectedRoute
              component={AdminReportsV}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.warehouses}
          element={
            <ProtectedRoute
              component={AdminWhereHousePage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.warehousesDetail}
          element={
            <ProtectedRoute
              component={AdminWhereHouseDetailPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.admingastronomy}
          element={
            <ProtectedRoute
              component={AdminGastronomyPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.adminagro}
          element={
            <ProtectedRoute
              component={AdminAgroPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.admincoffe}
          element={
            <ProtectedRoute
              component={AdminCoffePage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.users}
          element={
            <ProtectedRoute
              component={AdminUsersPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.notifications}
          element={
            <ProtectedRoute
              component={AdminNotificationsPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.help}
          element={
            <ProtectedRoute
              component={AdminHelperPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.profile}
          element={
            <ProtectedRoute
              component={AdminProfile}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.products}
          element={
            <ProtectedRoute
              component={AdminProducts}
              isAuthenticated={isAuthenticated}
            />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
