import React from "react";
import ProductCart from "../components/ProductCart";
import products from "../fakeData";

const Home = () => {
  return (
    <section>
      <div className="container mx-auto px-5 py-16">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
