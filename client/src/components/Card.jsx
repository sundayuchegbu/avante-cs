import styles, { layout } from "../style";
import vector from "../images/vector.png";
import vector4 from "../images/vector4.jpg";

import React from "react";

const Card = () => (
  <div className="relative ">
    <div className="flex flex-col-1 justify-end items-end mb-8">
      <h1 className=" mb-4">jsjsjdjkdkdk</h1>
      <p className="">jdjdjdjdj</p>
    </div>
    <div className="grid grid-cols-2 gap-0 ">
      <div className=" mx-16 rounded-lg shadow-lg bg-card mb-8">
        <div className="flex mr-24 -ml-8 z-0   ">
          <div className="flex w-1/3 mr-8  bg-primary rounded-[50%] h-[60px] w-[60px] mt-16 border-r">
            <img
              src={vector}
              alt="Image"
              className="mt-2 absolute insert-0 object-cover"
            />
          </div>
          <div className="p-4 w-2/3">
            <h2 className="text-xl font-bold max-w-[470px] text-white mb-4  ">
              Business Consulting
            </h2>
            <p className="text-white max-w-[470px] mb-4   ">
              Lorem ipsum dolor sit amet consectetur. Proin vel orci temporvelit
              mattis tempor at nisiLorem ipsum dolor sit amet consectetur. Proin
              vel orci tempor velit mattis tempor at nisi.
            </p>
            <button className=" text-white font-bold py-2 px-4 rounded">
              Read more
            </button>
          </div>
        </div>
      </div>

      <div className="  mx-16 rounded-lg shadow-lg bg-card mt-12 ">
        <div className="flex ml-24 -mr-8 z-0 ">
          <div className="p-4 w-2/3">
            <h2 className="text-xl text-white font-bold mb-2">Card Title 2</h2>
            <p className="text-white max-w-[470px] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              posuere, nunc vel fringilla pharetra, nisl velit sagittis lacus,
              in pellentesque sapien nisi eu velit.
            </p>
            <button className=" text-white font-bold py-2 px-4 rounded">
              Read more
            </button>
          </div>
          <div className="flex w-1/3 ml-24  bg-primary rounded-[50%] h-[60px] w-[60px] mt-16 border-r ">
            <img src={``} alt="Image" className="mt-2 absolute  object-cover" />
          </div>
        </div>
      </div>

      <div className=" mx-16 rounded-lg shadow-lg bg-card mb-8 ">
        <div className="flex  mr-24 -ml-8 z-0">
          <div className=" flex w-1/3 mr-8  bg-primary rounded-[50%] h-[60px] w-[60px] mt-16 border-l ">
            <img
              src={``}
              alt="Image"
              className="mt-2 absolute insert-0 object-cover"
            />
          </div>
          <div className="p-4 w-2/3 ">
            <h2 className="text-xl text-white font-bold mb-2">Card Title3</h2>
            <p className="text-white max-w-[470px] mb-4 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              posuere, nunc vel fringilla pharetra, nisl velit sagittis lacus,
              in pellentesque sapien nisi eu velit.
            </p>
            <button className=" text-white font-bold py-2 px-4 rounded">
              Read more
            </button>
          </div>
        </div>
      </div>

      <div className="  mx-16 rounded-lg shadow-lg bg-card mt-12 ">
        <div className="flex ml-24 -mr-8 z-0 ">
          <div className="p-4 w-2/3">
            <h2 className="text-xl text-white font-bold mb-2">Card Title 2</h2>
            <p className="text-white max-w-[470px] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              posuere, nunc vel fringilla pharetra, nisl velit sagittis lacus,
              in pellentesque sapien nisi eu velit.
            </p>
            <button className=" text-white font-bold py-2 px-4 rounded">
              Read more
            </button>
          </div>
          <div className="flex w-1/3 ml-24  bg-primary rounded-[50%] h-[60px] w-[60px] mt-16 border-r ">
            <img src={``} alt="Image" className="mt-2 absolute  object-cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
