import React, { useContext } from "react";
import toast from "react-hot-toast";

import { AuthContext } from "../context/Allcontext";

const BookingModal = ({ bookings, products }) => {
  const { user } = useContext(AuthContext);
  const handaleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.useremail.value;
    const name = event.target.name.value;

    const data = {
      image: bookings.image,
      sellerLocation: bookings.location,
      sellPrice: bookings.sellingprice,
      email,
      name,
      id: bookings._id,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
           
            toast.success("Bookings Has been successful")
        }else{
            toast.error(data.message)
        }
       
        
    })
   
  };

  return (
    <>
     <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Want To Book This?</h3>
          <form
            onSubmit={handaleSubmit}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              name="useremail"
              value={user?.email}
              readOnly
              className="input w-full input-bordered "
            />

            <input
              name="name"
              value={bookings.productName}
              readOnly
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="price"
              value={bookings.sellingprice}
              readOnly
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Your Location"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
         
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
