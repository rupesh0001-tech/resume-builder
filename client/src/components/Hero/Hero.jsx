import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getUserData } from "../../Hooks/UserData/UserData";

const Hero = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { user, setUser, loading } = getUserData();

  if (loading) {
    return <></>; // or a skeleton loader
  }

  // Logout Handler
  const handleLogout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/users/logout`,
        {},
        { withCredentials: true }
      );
      setUser(null); // clear user context
    } catch (error) {
      console.log(error);
    }
  };

  // Logos
  const logos = [
    "https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/framer.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg",
  ];

  // Show nothing while loading user
  if (loading) return <></>;

  return (
    <>
      <div className="min-h-screen pb-20">
        {/* Navbar */}
        <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
          <a href="/">
            <img src="/logo.svg" alt="Logo_img" className="h-10 w-auto" />
          </a>

          <div className="hidden md:flex items-center text-md font-medium gap-8 text-slate-800">
            <a href="#" className="hover:text-indigo-600">
              Home
            </a>
            <a href="#features" className="hover:text-indigo-600">
              Features
            </a>
            <a href="#testimonials" className="hover:text-indigo-600">
              Testimonials
            </a>
            <a href="#cta" className="hover:text-indigo-600">
              Contact
            </a>
          </div>

          {/* LOGIN / LOGOUT UI WITHOUT islogin */}
          {/* LOGIN / LOGOUT UI */}
          {user ? (
            <div className="flex justify-center items-center gap-4 ">
              <p>
                Hello, <span className="font-semibold">{user.name}</span>
                { console.log(user)} 
              </p>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-md font-medium bg-red-400 border border-gray-400 rounded-2xl hover:scale-105"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/register"
                className="hidden md:block px-6 py-2 bg-indigo-500 hover:bg-indigo-700 rounded-full text-white"
              >
                Get started
              </Link>

              <Link
                to="/login"
                className="hidden md:block px-6 py-2 border rounded-full text-slate-700 hover:bg-slate-50"
              >
                Login
              </Link>
            </div>
          )}

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden active:scale-90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-[100] bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <a href="/" className="text-white">
            Home
          </a>
          <a href="/products" className="text-white">
            Products
          </a>
          <a href="/stories" className="text-white">
            Stories
          </a>
          <a href="/pricing" className="text-white">
            Pricing
          </a>

          <button
            onClick={() => setMenuOpen(false)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md p-2"
          >
            X
          </button>
        </div>

        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-40 text-black">
          <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 bg-indigo-300 blur-[100px] opacity-30"></div>

          {/* Avatars */}
          <div className="flex items-center mt-24">
            <div className="flex -space-x-3 pr-3">
              {[
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
                "https://randomuser.me/api/portraits/men/75.jpg",
              ].map((src, i) => (
                <img
                  key={i}
                  loading="lazy"
                  src={src}
                  alt={`user-${i}`}
                  className="size-8 object-cover rounded-full border-2 border-white z-[2]"
                />
              ))}
            </div>

            <div>
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="lucide lucide-star text-transparent fill-indigo-600"
                    >
                      <path d="M11.5 2.3l2.3 4.7 5.2.8-3.7 3.6.9 5.1-4.6-2.4-4.6 2.4.9-5.1L2 8l5.2-.8z" />
                    </svg>
                  ))}
              </div>
              <p className="text-sm text-gray-700">Used by 10,000+ users</p>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-4 md:leading-[70px]">
            Build stunning Resumes{" "}
            <span className="bg-gradient-to-r from-indigo-700 to-indigo-600 bg-clip-text text-transparent">
              in Minutes
            </span>{" "}
            With AI.
          </h1>

          <p className="max-w-md text-center text-base my-7">
            Just append your information and you’re done! Let us make your
            resume.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Link
              to="/app?state=register"
              className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-9 h-12 flex items-center transition-colors"
            >
              Get started →
            </Link>

            <Link
              to="/app?state=login"
              className="border border-slate-400 hover:bg-indigo-50 rounded-full px-7 h-12 flex items-center text-slate-700"
            >
              Login
            </Link>
          </div>

          <p className="py-6 text-slate-600 mt-14">Trusted by leading brands</p>

          <div className="flex flex-wrap justify-between max-sm:justify-center gap-6 max-w-3xl w-full mx-auto py-4">
            {logos.map((logo, index) => (
              <img
                key={index}
                loading="lazy"
                src={logo}
                alt="logo"
                className="h-6 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
