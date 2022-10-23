import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { getAllProduct } from "../actions/productActions";
import Spinner from "../components/Loading";
import Error from "../components/Error";

const Home = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.getAllProductReducer);

  const { products, loading, error } = productState;

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <section>
      <div className="container mx-auto px-5 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {loading ? (
            <Spinner />
          ) : error ? (
            <Error error="something went wrong" />
          ) : (
            products?.products?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
