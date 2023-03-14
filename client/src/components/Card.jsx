import styles, { layout } from "../style";
import vector from "../images/vector.png";

import React from "react";

const Card = () => (
  <div class="grid grid-cols-2 gap-4">
    <div class="mx-16 rounded-lg shadow-lg">
      <div class="flex mr-24 ">
        <div class="flex w-1/3  mr-8 border-none bg-primary rounded-[50%] h-[60px] w-[60px] mt-16 border-r border-gray-200">
          <img
            src={vector}
            alt="Image"
            class="mt-2 mr-8  absolute insert-0 float-left object-cover"
          />
        </div>
        <div class="p-4 w-2/3">
          <h2 class="text-xl font-bold mb-2">Card Title</h2>
          <p class="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            posuere, nunc vel fringilla pharetra, nisl velit sagittis lacus, in
            pellentesque sapien nisi eu velit.
          </p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
          </button>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-lg">
      <div class="flex">
        <div class="p-4 w-2/3">
          <h2 class="text-xl font-bold mb-2">Card Title</h2>
          <p class="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            posuere, nunc vel fringilla pharetra, nisl velit sagittis lacus, in
            pellentesque sapien nisi eu velit.
          </p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
          </button>
        </div>
        <div class="w-1/3 border-l border-gray-200">
          <img
            src="https://via.placeholder.com/150"
            alt="Image"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-lg">
      <div class="flex">
        <div class="w-1/3 border-r border-gray-200">
          <img
            src="https://via.placeholder.com/150"
            alt="Image"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-4 w-2/3">
          <h2 class="text-xl font-bold mb-2">Card Title</h2>
          <p class="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            posuere, nunc vel fringilla pharetra, nisl velit sagittis lacus, in
            pellentesque sapien nisi eu velit.
          </p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
          </button>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-lg">
      <div class="flex">
        <div class="p-4 w-2/3">
          <h2 class="text-xl font-bold mb-2">Card Title</h2>
          <p class="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            posuere, nunc vel fringilla pharetra,
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
