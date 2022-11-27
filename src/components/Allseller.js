import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import AllSellerRow from "./AllSellerRow";

const Allseller = () => {
  const [post, setPost] = useState([]);

  const { data = [], refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      fetch("http://localhost:5000/user")
        .then((res) => res.json())
        .then((data) => {
          const allseller = data.filter((seller) => {
            return seller.role === "seller";
          });
          setPost(allseller);
        });
    },
  });

  const handaleDelete = (id) => {
    const proceed = window.confirm("Sure Want to Delete?");

    if (proceed) {
      fetch(`http://localhost:5000/user/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .thne((data) => {
          window.location.reload(true);
          refetch();
        });
    }
  };

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
            <th>veryfi</th>
            <th>Delete</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {post.map((seller) => (
            <AllSellerRow
              key={seller._id}
              handaleDelete={handaleDelete}
              seller={seller}
              refetch={refetch}
            ></AllSellerRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allseller;
