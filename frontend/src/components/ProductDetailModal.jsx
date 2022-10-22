import React from "react";

const ProductDetailModal = ({ product }) => {
  return (
    <div>
      <input
        type="checkbox"
        id="product-detail-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{product.name}</h3>
          <figure className="cursor-pointer">
            <img
              src={product.image}
              alt="product"
              className="rounded-xl w-32"
            />
          </figure>
          <p className="py-4">{product.description}</p>
          <div className="modal-action">
            <label htmlFor="product-detail-modal" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
