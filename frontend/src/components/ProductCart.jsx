import React from "react";
import { useState } from "react";
import ProductDetailModal from "./ProductDetailModal";

const ProductCart = ({ product }) => {
  const [quantiry, setQuantity] = useState(1);
  const [varient, setVariant] = useState("small");

  return (
    <div className="card text-neutral-content shadow-sm hover:shadow-lg">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>

        <div className="relative ">
          <label htmlFor="product-detail-modal" className="">
            <figure className="cursor-pointer">
              <img src={product.image} alt="Shoes" className="rounded-xl" />
              <h2 className="absolute bottom-5 text-white bg-primary rounded-md p-1 text-sm">
                Click for detail
              </h2>
            </figure>
          </label>
        </div>
        <p>{product.description}</p>
        <div className="flex justify-end gap-8">
          <div>
            <p className="font-bold text-sm">Varients</p>
            <select
              value={varient}
              onChange={(e) => {
                setVariant(e.target.value);
              }}
              className="select select-bordered rounded-none select-sm w-full "
            >
              {product.varients.map((varient) => {
                return <option>{varient}</option>;
              })}
            </select>
          </div>
          <div>
            <p className="font-bold text-sm">Quantity</p>
            <select
              value={quantiry}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              className="select select-bordered select-sm rounded-none w-full max-w-xs"
            >
              {[...Array(10).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="flex items-center justify-end pt-4">
          <button className="font-bold btn-sm">
            Price: {product.prices[0][varient] * quantiry}
          </button>
          <button className="btn btn-primary btn-sm">Add To Cart</button>
        </div>
        <ProductDetailModal product={product} />
      </div>
    </div>
  );
};

export default ProductCart;
