import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import PrivateRoute from "./Routes/PrivateRoute";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const PsychologistsPage = lazy(() => import("../pages/PsychologistsPage/PsychologistsPage"));
const FavoritesPage = lazy(() => import("../pages/FavoritesPage"));

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/psychologists" element={<PsychologistsPage />} />
        <Route path="/favorites" element={<PrivateRoute redirectTo="/" component={<FavoritesPage />} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
