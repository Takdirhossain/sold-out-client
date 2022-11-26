import React from 'react';

const User = ({us}) => {
    const{role} = us
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
                     
                    </div>
                  </div>
                 
                </div>
              </td>
              <td>
              <div>
                    <div className="font-bold">{role === 'seller'}</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
              </td>
              <td></td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
        
    );
};

export default User;