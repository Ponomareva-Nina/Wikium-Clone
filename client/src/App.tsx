import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { GamePage } from "./pages/GamePage/GamePage";
import { GamesPage } from "./pages/GamesPage/GamesPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { StartPage } from "./pages/StartPage/StartPage";
import { Team } from "./pages/Team/Team";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/games/:id" element={<GamePage />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
