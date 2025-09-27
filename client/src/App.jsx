import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BlogHero from './BlogHero';
import BlogPostCard from './BlogPostCard';
import Header from './Header';
import Footer from './Footer';
import Login from './Pages/Login';
import BlogPage from './Blog_detail';
import AdminPanel from './Pages/AdminPanel';
import BlogDetail from './Blog_detail';


const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/Login" />;
};

function App() {
  return (
    <div className='main'>
      <Header />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<><BlogHero /></>} />
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
