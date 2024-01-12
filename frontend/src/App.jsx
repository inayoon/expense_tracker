import { useState } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotAuthRoutes from "./components/NotAuthRoutes";
import { useSelector } from "react-redux";
import LandingPage from "./pages/LandingPage";

// function Layout() {
//   return (
//     <div className="flex flex-col h-screen justify-between">
//       <ToastContainer
//         position="bottom-right"
//         theme="light"
//         pauseOnHover
//         autoClose={1500}
//       />

//       <main className="mb-auto w-10/12 max-w-4xl mx-auto">
//         <Outlet />
//       </main>
//     </div>
//   );
// }

function App() {
  const isAuth = useSelector((state) => state.user?.isAuth);
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<NotAuthRoutes isAuth={isAuth} />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
