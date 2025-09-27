import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BlogHero from "./components/BlogHero";
import BlogPostCard from "./components/BlogPostCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
import BlogsPage from "./components/BlogsPage";
import AdminPanel from "./Pages/AdminPanel";
import BlogDetail from "./components/Blog_detail";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/Login" />;
};

function App() {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <BlogHero />
            </>
          }
        />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
