import React from "react";
import { toast, ToastContainer } from "react-toastify";

const Navbar = ({ card, setCard }) => {
  const notify = () => toast("Demo video will play! 1000 years later...");
  return (
    <div>
      <div className=" navbar bg-base-100 shadow-sm sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
          </div>
          <h1 className=" text-blue-500 text-3xl font-bold">DigiTools</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 cursor-pointer">
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#about">Features</a>
            </li>
            <li>
              <a href="#contact">Pricing</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          <div className="flex items-center gap-2">
            <span>
              <img src="https://i.ibb.co/Wp7n1Kk9/shopping-cart.png" alt="" />{" "}
             
            </span>
             <span className="">{card}</span>
          </div>

          <button className="btn btn-ghost">Login</button>
          <button className="btn rounded-full btn-primary">Get Started</button>
        </div>
      </div>
      <div className="md:navbar  md:flex justify-around items-center ">
        <div className=" p-5 flex flex-col gap-5">
          <div className=" flex items-center bg-[#e1e7ff] rounded-full w-fit px-3">
            <img src="https://i.ibb.co.com/qMhTd0FM/Group-5.png" alt="" />
            <p className=" text-blue-700  font-bold">
              New: AI-Powered Tools Available!
            </p>
          </div>

          <h1 className="font-bold text-4xl text-black">
            Supercharge Your <br /> <span className="text-purple-500">Digital Workflow</span>
          </h1>
          <p>
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />{" "}
            Explore Products
          </p>
          <div className=" flex gap-5">
            <button className="btn btn-primary rounded-full">
              Explore Products
            </button>
            <button onClick={notify} className="btn btn-outline rounded-full">
              <img src="https://i.ibb.co/zdjRJJr/Play.png" alt="" />
              Watch Demo
            </button>
            <ToastContainer />
          </div>
        </div>
        <img className=" shadow-2xl" src="https://i.ibb.co/S7sZrn9M/banner.png" alt="" />
      </div>
      <div className=" md:flex items-center justify-center gap-30 w-full bg-blue-500 h-30 text-white mt-10">
        <div className="  border-r-2 border-[#8b8888] pr-10">
          <h1 className=" font-bold text-4xl">50K+</h1>
          <p>Active Users</p>
        </div>
        <div className="  border-r-2 border-[#8b8888] pr-10 px-10">
          <h1 className=" font-bold text-4xl">200+</h1>
          <p>Premium Tools</p>
        </div>
        <div className="  border-r-2 border-[#8b8888] pr-10 px-10">
          <h1 className=" font-bold text-4xl">4.9</h1>
          <p>Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
