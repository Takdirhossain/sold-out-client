import React, { useContext } from 'react';
import { AuthContext } from '../context/Allcontext';

const BookingModal = ({bookings}) => {
  const {user} = useContext(AuthContext)
    return (
      <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
          <div className="modal-box relative">
              <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="text-lg font-bold">Want To Book This?</h3>
              <form  className='grid grid-cols-1 gap-3 mt-10'>
                  <input type="text" value={user?.email} readOnly className="input w-full input-bordered " />
                 
                  <input name="name" value={bookings.productName} readOnly type="text" placeholder="Your Name" className="input w-full input-bordered" />
                  <input name="price" value={bookings.sellingprice} readOnly type="email" placeholder="Email Address" className="input w-full input-bordered" />
                  <input name="phone" type="text" placeholder="Your Number" className="input w-full input-bordered" />
                  <input name="location" type="text" placeholder="Your Location" className="input w-full input-bordered" />
                  <br />
                  <input className='btn btn-accent w-full' type="submit" value="Submit" />
              </form>
          </div>
      </div>
  </>
    );
};

export default BookingModal;