import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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

import { useAppDispatch, useAppSelector } from "./store/redux-hooks";
import { checkAuth } from "./store/user/user.actions";
import { getTokenFromLocalStorage } from "./utils/auth.utils";

function App() {
  const { entity: user, isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const accessToken = getTokenFromLocalStorage();
    if (accessToken !== null) {
      dispatch(checkAuth());
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
