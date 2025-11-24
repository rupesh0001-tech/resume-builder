import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getUserData } from "../../Hooks/UserData/UserData";

const Hero = ({ onFeatureClick, onTestimonialClick, onContactClick }) => {
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
    <section className="flex flex-col items-center text-sm bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-with-grid.png')] bg-cover bg-center bg-no-repeat  ">
      {/* 🔵 NAVBAR (Styled like UI #1) */}
      <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-slate-800 text-sm">
        <a href="/">
          <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 transition duration-500">
          <button
            onClick={onFeatureClick}
            className="hover:text-slate-500 transition hover:cursor-pointer "
          >
            Features
          </button>

          <button
            onClick={onTestimonialClick}
            className="hover:text-slate-500 transition hover:cursor-pointer "
          >
            Testimonials
          </button>

          <button
            onClick={onContactClick}
            className="hover:text-slate-500 transition hover:cursor-pointer "
          >
            Contact
          </button>
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
              to="/Login"
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
        className={`fixed inset-0 z-[100] bg-white/60 backdrop-blur text-slate-800 flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
            onClick={onFeatureClick}
            className="hover:text-slate-500 transition hover:cursor-pointer "
          >
            Features
          </button>

          <button
            onClick={onTestimonialClick}
            className="hover:text-slate-500 transition hover:cursor-pointer "
          >
            Testimonials
          </button>

          <button
            onClick={onContactClick}
            className="hover:text-slate-500 transition hover:cursor-pointer "
          >
            Contact
          </button>

        <button
          onClick={() => setMenuOpen(false)}
          className="bg-slate-100 p-2 rounded-md hover:bg-slate-200"
        >
          X
        </button>
      </div>

      {/* 🔵 HERO SECTION LIKE FIRST UI */}
      <main className="flex flex-col items-center max-md:px-2 mt-7 mb-20">
        {/* NEW tag */}
        <Link
          to="/register"
          className="mt-32 flex items-center gap-2 border border-indigo-200 rounded-full p-1 pr-3 text-sm font-medium text-indigo-500 bg-indigo-200/20"
        >
          <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
            NEW
          </span>
          <p className="flex items-center gap-1">
            Try Resume Builder Free
            <svg width="6" height="9" viewBox="0 0 6 9" fill="none">
              <path
                d="m1 1 4 3.5L1 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
        </Link>

        {/* Headline */}
        <h1 className="text-center text-5xl leading-[68px] md:text-6xl md:leading-[80px] font-semibold max-w-4xl text-slate-900">
          Build stunning{" "}
          <span className="bg-gradient-to-r from-indigo-700 to-indigo-600 bg-clip-text text-transparent">
            AI-powered Resumes
          </span>{" "}
          in Minutes.
        </h1>

        <p className="text-center text-base text-slate-700 max-w-lg mt-2">
          Just enter your information and let AI generate a job-ready resume.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4 mt-8">
          <Link
            to="/app"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 rounded-lg px-7 h-11"
          >
            Get started →
          </Link>

          {user ? (
            <></>
          ) : (
            <Link
              to="/login"
              className="border border-slate-600 active:scale-95 hover:bg-white/10 transition text-slate-600 rounded-lg px-8 h-11 flex justify-center items-center gap-2"
            >
              Login
            </Link>
          )}
        </div>
      </main>
    </section>
  );
};

export default Hero;
