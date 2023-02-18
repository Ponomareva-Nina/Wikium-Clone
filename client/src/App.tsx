import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "./layout/Layout";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { GamePage } from "./pages/GamePage/GamePage";
import { GamesPage } from "./pages/GamesPage/GamesPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { StartPage } from "./pages/StartPage/StartPage";
import { StatisticsPage } from "./pages/StatisticsPage/StatisticsPage";
import { AccountSettings } from "./pages/AccountSettings/AccountSettings";
import { Team } from "./pages/Team/Team";
import { useActions, useAppSelector } from "./store/redux-hooks";
import { getTokenFromLocalStorage } from "./utils/auth.utils";

function App() {
  const { checkAuth } = useActions();
  const { entity: user, isLoading } = useAppSelector((state) => state.user);

  useEffect(() => {
    const accessToken = getTokenFromLocalStorage();
    if (accessToken !== null) {
      checkAuth();
    }
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <h1>Loading...</h1>
      </Layout>
    );
  }

  if (user === null) {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/games/:id" element={<GamePage />} />
        <Route path="/stats" element={<StatisticsPage />} />
        <Route path="/account" element={<AccountSettings />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
