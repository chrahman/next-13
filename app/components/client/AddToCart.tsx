"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <h2 className="sm:text-2xl text-2xl font-medium title-font mb-2 text-gray-900">
        Add to Cart
      </h2>
      <button
        onClick={() => console.log("click")}
        className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add to Cart Button
      </button>
    </div>
  );
};

export default AddToCart;
