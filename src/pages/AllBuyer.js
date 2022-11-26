import React, { useEffect, useState } from "react";
import User from "../components/User";

const AllBuyer = () => {
  const [user, setUser] = useState([]);
console.log(user)
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then(res => res.json())
      .then(data => {
        setUser(data);
      });
  }, []);
  return (
    <div>
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Posted Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {
        user.map(us => <User key={us._id} us={us}></User>)
        }
          </tbody>
        </table>
      </div>
    </div>
        
    
    
  );
};

export default AllBuyer;
