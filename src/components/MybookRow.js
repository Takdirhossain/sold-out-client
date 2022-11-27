import React from 'react';

const MybookRow = ({booked}) => {
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
          <br/>
         
        </td>
        <td>{booked.location}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Pay</button>
        </th>
      </tr>
    );
};

export default MybookRow;