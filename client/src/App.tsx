import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { StartPage } from "./pages/StartPage/StartPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
