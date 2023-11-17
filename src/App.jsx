import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { PrivateRoute } from "./components/PrivateRoot/PrivateRoot";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { GamesPage } from "./pages/GamesPage/GamesPage";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path="/games"
          element={
            <PrivateRoute>
              <GamesPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
