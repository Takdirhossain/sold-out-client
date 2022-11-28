import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import toast from 'react-hot-toast';
import { AuthContext } from '../context/Allcontext';

const ProductDetails = ({product, setBookings }) => {
  const {user} = useContext(AuthContext)
const handaleSubmit = () => {
  const data = {
    reporteremail: user.email,
    productName:product.productName,
    productImg:product.image,
    sellerName: product.name,
    productid : product._id,
    sellingprice: product.sellingprice
  }
  
  fetch('http://localhost:5000/report', {
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(data => {
    if(data.acknowledged){
      toast.success("Report Success")  
    }else{
      toast.error(data.message)
  }
  })

}


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
           {product.verifyed === 'verifyed'? <>
           <div className="tooltip" data-tip="verifyed">
                <button >
                 
                  <FontAwesomeIcon
                    className="mr-2 ml-2"
                    icon={faCheck}
                  ></FontAwesomeIcon>
                </button>
              </div>
           </>
          :
          <>
          <div className="tooltip" data-tip="Not verifyed">
                <button >
                 
                  <FontAwesomeIcon
                    className="mr-2 ml-2"
                    icon={faXmark}
                  ></FontAwesomeIcon>
                </button>
              </div>
          </> 
          }
          </p>
          <p className="text-xl font-bold">
            Poste Date : {product.time}
          </p>
          
          <div className="card-actions justify-end">
          <button onClick={handaleSubmit} className='btn'>Report To Admin</button>
            <label htmlFor="my-modal-6" onClick={() => setBookings(product)} className="btn">Book Now</label>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;