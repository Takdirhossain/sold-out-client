import React from 'react';

const UserRow = ({us, handaleDelete}) => {
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
        {us.email}
        <br />
      </td>
      <td>{us.role}</td>
      <th>
        <button onClick={() => handaleDelete(us._id)}  className="btn btn-ghost btn-xs">X</button>
      </th>
    </tr>
    );
};

export default UserRow;