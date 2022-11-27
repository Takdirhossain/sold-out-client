import React, { useState } from "react";

const AllSellerRow = ({ seller,handaleDelete, refetch }) => {
  const handaleVeryfi = email => {
    fetch(`http://localhost:5000/user/${email}`, {
        method: 'PUT'
    })
    .then(res => res.json())
    .then(data => {
        refetch()
    })
  }
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar"></div>
          <div>
            <div className="font-bold"></div>
            <div className="text-sm opacity-50"></div>
          </div>
        </div>
      </td>
      <td>
        {seller.email}
        <br />
      </td>
      <td>{seller.role}</td>
      <td>
        {
            seller.verify !== "verifyed"? <>
            <button className="bg-red-600 p-2 text-white" onClick={() => handaleVeryfi(seller.email)}>verify</button>
            </>
            :
            <button className="bg-lime-700 p-2 text-white">verified</button>
        }
        
      </td>
      <th>
        <button onClick={() => handaleDelete(seller._id)} className="btn btn-ghost btn-xs">Delete</button>
      </th>
    </tr>
  );
};

export default AllSellerRow;
