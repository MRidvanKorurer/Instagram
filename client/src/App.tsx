import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import MessengarPage from "./pages/MessengarPage";
import { RegisterPage } from "./pages/register/RegisterPage";
import { LoginPage } from "./pages/login/LoginPage";
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { useEffect } from "react";
import { isAuthStatus } from "./redux/slices/authSlice";
import { ToastContainer } from 'react-toastify';



function App() {

  const {isAuth} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(isAuthStatus());
}, [dispatch])

  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <ToastContainer />
          <Routes>
            <Route path="/" element={isAuth ? <HomePage /> : <LoginPage />}/>
            <Route path="/profile/:username" element={isAuth ? <ProfilePage /> : <LoginPage />}/>
            <Route path="/messengar" element={isAuth ? <MessengarPage /> : <LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/login" element={<LoginPage />}/>
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
