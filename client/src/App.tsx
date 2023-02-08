import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { AccountSettings } from "./pages/AccountSettings/AccountSettings";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { GamePage } from "./pages/GamePage/GamePage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { StartPage } from "./pages/StartPage/StartPage";
import { StatisticsPage } from "./pages/StatisticsPage/StatisticsPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/games" element={<GamePage />} />
        <Route path="/stats" element={<StatisticsPage />} />
        <Route path="/account" element={<AccountSettings />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
