import React from 'react';

const ReportedRow = ({report}) => {
    const {productImg, productName, reporteremail, sellerName, productid, _id} = report
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
                  src={productImg}
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
        <td>{reporteremail}</td>
        <td>{reporteremail}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>
    );
};

export default ReportedRow;