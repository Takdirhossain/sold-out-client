import React from "react";
import { Link } from "react-router-dom";

const MybookRow = ({ booked }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={booked.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{booked.name}</div>
            <div className="text-sm opacity-50"></div>
          </div>
        </div>
      </td>
      <td>
        {booked.sellPrice}
        <br />
      </td>
      <td>{booked.location}</td>
      <th>
        {booked.paid === true ? (
          booked.sellPrice &&
          booked.paid && (
            <span className=" font-bol p-3 bg-error rounded-xl text-white">
              Paid
            </span>
          )
        ) : (
          <Link to={`/payment/${booked._id}`}>
            {" "}
            <button onClick={() => booked} className="btn-xs btn btn-success">
              TO Pay
            </button>
          </Link>
        )}

       
      </th>
    </tr>
  );
};

export default MybookRow;
