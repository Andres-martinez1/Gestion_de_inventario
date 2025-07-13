import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "../components/atomic/templates/NotFound";
import LoginPage from "../pages/auth/LoginPage";
import AuthLayout from "../layouts/AuthLayout";
import ProtectedRoute from "./ProtectedRoute";
import AdminLayout from "../layouts/AdminLayout";
import AdminPage from "../pages/AdminPage";
import AdminStatsPage from "../pages/AdminStatsPage";
import AdminReports from "../pages/AdminReports";
import RedirectIfAuthenticated from "./RedirectIfAuthenticated";
import { useAuth } from "../hooks/Auth/use-auth";
import { routes } from "./Routes";
import AdminProfile from "../pages/AdminProfile";
import AdminProducts from "../pages/AdminProducts";
import AdminWhereHousePage from "../pages/AdminWhereHousePage";
import AdminHelperPage from "../pages/AdminHelper";
import AdminWhereHouseDetailPage from "../pages/AdminWhereHouseDetailPage";
import AdminGastronomyPage from "../pages/AdminGastronomyPage";
import AdminAgroPage from "../pages/AdminAgroPage";
import AdminCoffePage from "../pages/AdminCoffePage";
import AdminReportsS from "../pages/AdminReportsS";
import AdminReportsI from "../pages/AdminReportsI";
import AdminReportsT from "../pages/AdminReportsT";
import AdminStatsPageS from "../pages/AdminStatsPageS";
import AdminStatsPageT from "../pages/AdminStatsPageT";
import AdminStatsPageI from "../pages/AdminStatsPageI";
// import AdminMovimientos from "../pages/AdminMoviminetos";
import AdminUser from "../pages/AdminUser";
import AdminPermisos from "../pages/AdminPermisos";
import AdminTables from "../pages/AdminTables";


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
          path={routes.users}
          element={
            <ProtectedRoute
              component={AdminUser}
              isAuthenticated={isAuthenticated}
            />
          }
        />
          <Route
          path={routes.tables}
          element={
            <ProtectedRoute
              component={AdminTables}
              isAuthenticated={isAuthenticated}
            />
          }
        />
                <Route
          path={routes.permisos}
          element={
            <ProtectedRoute
              component={AdminPermisos}
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
              component={AdminStatsPageS}
              isAuthenticated={isAuthenticated}
            />
          }
        />{" "}
        <Route
          path={routes.StacticT}
          element={
            <ProtectedRoute
              component={AdminStatsPageT}
              isAuthenticated={isAuthenticated}
            />
          }
        />{" "}
        <Route
          path={routes.StacticI}
          element={
            <ProtectedRoute
              component={AdminStatsPageI}
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
          path={routes.warehouses}
          element={
            <ProtectedRoute
              component={AdminWhereHousePage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path={routes.warehouses}
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
          path={routes.help}
          element={
            <ProtectedRoute
              component={AdminHelperPage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        {/* <Route
          path={routes.movimientos}
          element={
            <ProtectedRoute
              component={AdminMovimientos}
              isAuthenticated={isAuthenticated}
            />
          }
        /> */}
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
