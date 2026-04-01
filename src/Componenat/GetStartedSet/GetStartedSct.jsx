import React from "react";

const GetStartedSct = () => {
  return (
    <div className="">
      <div className=" mb-10 ">
        <div className="flex flex-col justify-center items-center text-center gap-3 mb-10">
          <h1 className="font-bold text-4xl">Get Started in 3 Steps</h1>
          <p>Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center text-center gap-5">
          <div className="card bg-base-100 w-96 shadow-sm ">
            <div className="card-body">
              <div className="justify-end flex">
                <span className="bg-blue-500 badge w-8 h-8 rounded-full text-white text-right">
                  01
                </span>
              </div>
              <div className="flex justify-center">
                <figure className=" bg-[#f2e9fe] rounded-full w-20 h-20 flex items-center justify-center">
                  <img src="https://i.ibb.co.com/tTbnDNpq/user.png" alt="" />
                </figure>
              </div>

              <h1 className=" font-bold text-xl">Create Account</h1>
              <p>
                Sign up for free in seconds. No credit card <br /> required to
                get started.
              </p>
            </div>
          </div>

          <div className="">
            <div className="card bg-base-100 w-96 shadow-sm">
              <div className="card-body">
                <div className="justify-end flex">
                <span className="bg-blue-500 badge w-8 h-8 rounded-full text-white text-right">
                  02
                </span>
              </div>
                <div className="flex justify-center">
                  <figure className=" bg-[#f2e9fe] rounded-full w-20 h-20 flex items-center justify-center">
                    <img src="https://i.ibb.co.com/4ZSLKSRS/package.png" alt="" />
                  </figure>
                </div>
                <h1 className=" font-bold text-xl">Choose Products</h1>
                <p>
                  Sign up for free in seconds. No credit card required to get
                  started.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card bg-base-100 w-96 shadow-sm">
              <div className="card-body">
                <div className="justify-end flex">
                <span className="bg-blue-500 badge w-8 h-8 rounded-full text-white text-right">
                  03
                </span>
              </div>
                <div className="flex justify-center">
                  <figure className=" bg-[#f2e9fe] rounded-full w-20 h-20 flex items-center justify-center">
                    <img src="https://i.ibb.co.com/5WGh3RSV/rocket.png" alt="" />
                  </figure>
                </div>
                <h1 className=" font-bold text-xl">Start Creating</h1>
                <p>
                  Sign up for free in seconds. No credit card required to get
                  started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSct;
