import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Layout } from "./layout/Layout";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { GamePage } from "./pages/GamePage/GamePage";
import { GamesPage } from "./pages/GamesPage/GamesPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { StartPage } from "./pages/StartPage/StartPage";
import { StatisticsPage } from "./pages/StatisticsPage/StatisticsPage";
import { AccountSettings } from "./pages/AccountSettings/AccountSettings";
import { Team } from "./pages/Team/Team";

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <Layout isAuth={isAuth}>
      <Routes>
        <Route path="/" element={<StartPage isAuth={isAuth} />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/register" element={<RegistrationPage />} />
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
