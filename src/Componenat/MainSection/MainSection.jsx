import React, { useState } from "react";
import Tools from "../Tools/Tools";
import SeclectedCard from "../SelectedCard/SeclectedCard";

const MainSection = ({ card, setCard }) => {

  const RemoveBtn = (id) => {
    setSelectedTool(seclectedTool.filter((tool) => tool.id !== id));
    setCard(seclectedTool.length - 1);
  };
  const [activeTab, setActiveTab] = useState("products");
  const [seclectedTool, setSelectedTool] = useState([]);
  const CheckoutRemove = () => {
    setSelectedTool([]);
    setCard(0);
  };
  return (
    <div className="mb-20 mt-10 space-y-5 text-center">
      <div className=" flex items-center justify-center  w-full ">
        <span className="bg-gray-300 px-5 py-2 rounded-full">
          <button
            className={`btn ${activeTab === "products" ? "btn-primary" : ""} rounded-l-full`}
            onClick={() => setActiveTab("products")}
          >
            Products
          </button>
          <button
            className={`btn ${activeTab === "cart" ? "btn-primary" : ""} rounded-r-full`}
            onClick={() => setActiveTab("cart")}
          >
            Cart ({card})
          </button>
        </span>
      </div>
      <div className="">
        {activeTab === "products" ? (
          <div className="p-4">
            <Tools
              card={card}
              setCard={setCard}
              seclectedTool={seclectedTool}
              setSelectedTool={setSelectedTool}
            />
          </div>
        ) : (
          <div className=" m-5 p-20 outline-1 outline-gray-300 rounded-lg">
            {seclectedTool.length > 0 ? (
              seclectedTool.map((tool) => (
                <div
                  key={tool.id}
                  className="flex items-center justify-between w-full bg-gray-100 p-4 rounded-lg mt-5"
                >
                  <div className=" flex items-center gap-3">
                    <img
                      className="w-16 h-16 "
                      src={tool.img}
                      alt={tool.name}
                    />
                    <div className="">
                      <h3 className="text-lg font-bold ">{tool.name}</h3>
                      <p className="flex  text-gray-600 ">${tool.price}</p>
                    </div>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => RemoveBtn(tool.id)}
                      className="btn btn-error btn-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <p className="text-center">Your cart is empty.</p>
                <img
                  className="mx-auto w-7"
                  src="https://i.ibb.co/Wp7n1Kk9/shopping-cart.png"
                  alt=""
                />
              </div>
            )}
            <div className="mt-5">
              <div className="flex items-center justify-between">
                <p className="">total:</p>
                <p className="font-extrabold text-2xl">
                  $
                  {seclectedTool
                    .reduce((amount, tool) => amount + tool.price, 0)
                    .toFixed(2)}
                </p>
              </div>

              <button
                onClick={CheckoutRemove}
                className="btn w-full btn-primary rounded-full"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainSection;
