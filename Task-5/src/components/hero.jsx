import React from "react";
import Nav from "./Nav";

const Hero = () => {
  const navItems = [
    {
      id: 1,
      icon: "./heroList/image1.png",
      title: "Grocery",
      description: "Fresh grocery delivered",
    },
    {
      id: 2,
      icon: "./heroList/image2.png",
      title: "Salads",
      description: "Order nutritious salads",
    },
    {
      id: 3,
      icon: "./heroList/image3.png",
      title: "Cart Value",
      description: "Cart value review your cart",
    },
    {
      id: 4,
      icon: "./heroList/image4.png",
      title: "Grocery",
      description: "Fresh grocery delivered",
    },
  ];

  return (
    <div className="bg-custom-gradient h-screen">
      <Nav />

      <div className="flex items-center justify-center gap-4 mt-16">
        <div>
          <img
            src="./Organic.png"
            alt="Organic Text"
            width={120}
            height={120}
          />
        </div>

        <div className="flex flex-col gap-10">
          <div className="text-5xl font-extrabold font-poppins">
            Live on <br />
            <span className="text-[#10B981]">
              fruits & vegetables <br />
            </span>
            to live Healthy
          </div>

          <div className="flex">
            <div className="flex flex-col items-center space-y-4">
              <div className="text-2xl font-extrabold font-poppins border-b-2 border-black pb-1 mb-4">
                100% Healthy & Fresh
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-black text-white py-2 px-4 rounded-full cursor-pointer">
              Shop Now
            </div>
          </div>
        </div>
        <div className="mt-2">
          <img src="./Hero_image.png" alt="Hero with groceries" />
        </div>
      </div>
      <div className="-mt-14 flex items-center justify-center">
        <div
          className="w-[80%] -mt-2 flex items-center justify-center bg-white shadow-[0px_1px_30px_0px_rgba(36,38,43,0.1)] rounded-lg p-8 space-x-8"
        >
          {navItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-3">
              <div className="">
                <img src={item.icon} alt={item.title} className="w-16 h-16" />
              </div>
              <div>
                <div className="font-bold text-green-700">{item.title}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
