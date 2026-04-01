import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import SeclectedCard from "../SelectedCard/SeclectedCard";

const Tools = ({ tool, card, setCard, seclectedTool, setSelectedTool }) => {
  // const Availbelplyers = ({ plyers, setcoens, coens, seclecredPlyers, setseclecredPlyers }) => {

  const handleSelectPlayer = (tool) => {
    const exists = seclectedTool.find((handSeclected) => handSeclected.id === tool.id);

    if (exists) return;
    setSelectedTool([...seclectedTool, tool]);

    //   if (coens >= player.price) {
    //     setcoens(coens - player.price);
    //     setseclecredPlyers([...seclecredPlyers, player]);

    //     ToastContainer();
    //      toast(`${player.playerName} has been selected!`);
    //   } else {
    //     toast("Not enough coins!");
    //   }
  };
  const notify = () => toast("You Bought It!");
  const [data, setData] = useState([]);
  const [isbuy, setBuy] = useState([]);
  const handleBuy = (id) => {
    notify();
    setBuy([...isbuy, id]);
  };

  useEffect(() => {
    fetch("/Product.json")
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);
  return (
    <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
      {data.map((tool) => (
        <div
          key={tool.id}
          className=" w-full bg-base-100 shadow-xl rounded-lg "
        >
          <div className="card  bg-base-100 w-full  shadow-sm hover:bg-gray-100 transition duration-300">
            <div className="card-body  text-left">
              <div className="flex justify-between ">
                <img className="" src={tool.img} alt={tool.name} />
                <h1 className="badge badge-primary">{tool.tag}</h1>
              </div>

              <h2 className="card-title text-2xl">{tool.name}</h2>

              <p>{tool.description}</p>
              <span>
                ${tool.price}/{tool.period}
              </span>
              <p>{tool.features.join(", ")}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => {
                    handleSelectPlayer(tool);
                    handleBuy(tool.id);
                    setCard(card + 1);
                  }}
                  className={`btn btn-primary w-full rounded-full ${isbuy.includes(tool.id) ? "btn-success" : "btn-primary"}`}
                >
                  {isbuy.includes(tool.id) ? "✔ You Purchase it!" : "Buy Now"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <SeclectedCard
        seclectedTool={seclectedTool}
        setSelectedTool={setSelectedTool}
      />
    </div>
  );
};

export default Tools;
