import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../context/Allcontext";
import Myadded from "./Myadded";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  // const [myadded, setMyadded] = useState([]);
 
  
  const { data:myadded =  [], refetch } = useQuery({
    queryKey: ["myadded"],
    queryFn: async () => {
     const res=await fetch(`http://localhost:5000/product?email=${user?.email}`)
        const data=res.json()
         return data
    },
  });
  // useEffect(() => {
  //   fetch(`http://localhost:5000/product?email=${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMyadded(data);
  //     });
  // }, [user]);
  const handaleDelete = (id) => {
    const proceed = window.confirm("Sure Want to Delete?");

    if (proceed) {
      fetch(`http://localhost:5000/products/${id}`, {
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
            {myadded.map((add) => (
              <Myadded key={add._id} handaleDelete={handaleDelete} refetch={refetch}  add={add}></Myadded>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
