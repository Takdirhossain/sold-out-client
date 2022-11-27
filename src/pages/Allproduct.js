import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../components/BookingModal";
import Loading from "../components/Loading";
import ProductDetails from "../components/ProductDetails";

const Allproduct = () => {
  const product = useLoaderData();

  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState(null);
  const { data: products = [] } = useQuery({
    queryKey: ["products"],

    queryFn: async () => {
      setLoading(true);
      const res = await fetch(
        `http://localhost:5000/products?id=${product._id}`
      );
      const data = res.json();
      setLoading(false);
      return data;
    },
  });

  return (
    <div>
      {loading ? (
        <>
          <Loading></Loading>
        </>
      ) : (
        <>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20">
            {products?.map((product) => <ProductDetails product={product} setBookings={setBookings}></ProductDetails> )}
            {bookings && (
              <BookingModal
                products={products}
                bookings={bookings}
              ></BookingModal>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Allproduct;
