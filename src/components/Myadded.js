import React from 'react';

const Myadded = ({add}) => {
    console.log(add)
    const {productName, image, time} = add
    return (
        
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                 
                </div>
              </td>
              <td>
              <div>
                    <div className="font-bold">{productName}</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
              </td>
              <td>{time}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
       
    );
};

export default Myadded;