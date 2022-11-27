import React, { useEffect, useState } from "react";
import User from "../components/User";
import UserRow from "../components/UserRow";

const AllBuyer = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        const allbuyer = data.filter((buyer) => {
          return buyer.role === "buyer";
        });
        setPost(allbuyer);
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
              <th>Email</th>
              <th>Role</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {post.map((us) => (
              <UserRow key={us._id} us={us}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyer;
