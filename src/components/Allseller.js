import React, { useEffect, useState } from "react";
import AllSellerRow from "./AllSellerRow";

const Allseller = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        const allseller = data.filter((seller) => {
          return seller.role === "seller";
        });
        setPost(allseller);
      });
  }, []);
  console.log(post);
  return (
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
          {post.map((seller) => (
            <AllSellerRow key={seller._id} seller={seller}></AllSellerRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allseller;
