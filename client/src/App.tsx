import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Loader } from "./components/UI";
import { Layout } from "./layout/Layout";

import {
  StartPage,
  AuthPage,
  RegistrationPage,
  GamesPage,
  GamePage,
  StatisticsPage,
  AccountSettings,
  Team,
} from "./pages";
import { AchievesPage } from "./pages/Achieves/Achieves";

import { useAppDispatch, useAppSelector } from "./store/redux-hooks";
import { checkAuth } from "./store/user/user.actions";
import { getTokenFromLocalStorage } from "./utils/auth.utils";

function App() {
  const { entity: user, isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = getTokenFromLocalStorage();
    if (accessToken !== null) {
      dispatch(checkAuth())
        .unwrap()
        .then(() => navigate({ pathname }))
        .catch(() => navigate("/"));
    }
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <Loader />
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
          <Route path="/team" element={<Team />} />
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
        <Route path="/achieves" element={<AchievesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
