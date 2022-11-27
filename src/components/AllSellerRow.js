import React from "react";

const AllSellerRow = ({ seller }) => {
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
      <th>
        <button className="btn btn-ghost btn-xs">X</button>
      </th>
    </tr>
  );
};

export default AllSellerRow;
