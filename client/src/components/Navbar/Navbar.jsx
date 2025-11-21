import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { getUserData } from "../../Hooks/UserData/UserData";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, setUser, loading } = getUserData();

  if (loading) return <></>;

  const handleLogout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/users/logout`,
        {},
        { withCredentials: true }
      );
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-slate-800 text-sm">
        <a href="/">
          <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 transition duration-500">
          <a href="/" className="hover:text-slate-500 transition">
            Home
          </a>
          <a href="#features" className="hover:text-slate-500 transition">
            Features
          </a>
          <a href="#testimonials" className="hover:text-slate-500 transition">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-slate-500 transition">
            Contact
          </a>
        </div>

        {/* Login / Logout */}
        {user ? (
          <div className="hidden md:flex items-center gap-4">
            <p>
              Hello, <span className="font-semibold">{user.name}</span>
            </p>

            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md hover:cursor-pointer "
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden md:block space-x-3">
            <Link
              to="/register"
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-md"
            >
              Get started
            </Link>

            <Link
              to="/login"
              className="hover:bg-slate-100 transition px-6 py-2 border border-indigo-600 rounded-md"
            >
              Login
            </Link>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden active:scale-90 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </nav>

      {/* 🔵 MOBILE MENU (Same animation as UI #1) */}
      <div
        className={`fixed inset-0 z-100 bg-white/60 backdrop-blur text-slate-800 flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a href="/">Home</a>
        <a href="#features">Features</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>

        <button
          onClick={() => setMenuOpen(false)}
          className="bg-slate-100 p-2 rounded-md hover:bg-slate-200"
        >
          X
        </button>
      </div>
    </>
  );
};

export default Navbar;
