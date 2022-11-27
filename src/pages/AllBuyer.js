import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import UserRow from "../components/UserRow";

const AllBuyer = () => {
  const [post, setPost] = useState([]);

  const { data = [], refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      fetch("http://localhost:5000/user")
        .then((res) => res.json())
        .then((data) => {
          const allseller = data.filter((buyer) => {
            return buyer.role === "buyer";
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
          console.log(data);
        });
    }
  };
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
              <UserRow
                key={us._id}
                handaleDelete={handaleDelete}
                us={us}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyer;
