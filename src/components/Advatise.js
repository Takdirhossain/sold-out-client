import React, { useEffect, useState } from "react";

const Advatise = () => {
  const [ads, setAds] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/ads")
      .then((res) => res.json())
      .then((data) => {
        setAds(data);
      });
  });

  return (
    <div>
        <h2 className="text-4xl">Ads Now</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        
        {ads.map((category) => (
          <div
            key={category._id}
            className="card w-96 bg-base-100 shadow-xl category-card"
          >
            <figure>
              <img src={category.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{category.productName}</h2>
              <p>{category.sellingprice}$</p>
              <p>{category.location}$</p>
              <p>Seller {category.name}$</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Ads Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advatise;
