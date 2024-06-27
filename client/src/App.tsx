import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import MessengarPage from "./pages/MessengarPage";
import { RegisterPage } from "./pages/register/RegisterPage";
import { LoginPage } from "./pages/login/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/profile/:username" element={<ProfilePage />}/>
            <Route path="/messengar" element={<MessengarPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/login" element={<LoginPage />}/>
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
