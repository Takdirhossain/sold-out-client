import React from 'react';

const ProductDetails = ({product, setBookings }) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl category-card">
        <figure>
          <img src={product.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.model}</h2>
          <p className="text-2xl font-bold">{product.productName}</p>
          <p className="text-xl font-bold">
            Selling Price : <span>{product.sellingprice}</span>
          </p>
          <p className="text-xl font-bold">
            Buying Price : {product.buyprice}
          </p>
          <p className="text-xl font-bold">
            Location : {product.location}
          </p>
          <p className="text-xl font-bold">
            Year Of Use : {product.usedDay} Year
          </p>
          <p className="text-xl font-bold">
            Seller Name : {product.name}
          </p>
          <p className="text-xl font-bold">
            Poste Date : {product.time}
          </p>
          <div className="card-actions justify-end">
           
            <label htmlFor="my-modal-6" onClick={() => setBookings(product)} className="btn">open modal</label>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;