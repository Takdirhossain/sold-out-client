import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/Allcontext";
import Myadded from "./Myadded";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const [myadded, setMyadded] = useState([]);
  console.log(myadded);
  useEffect(() => {
    fetch(`http://localhost:5000/product?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyadded(data);
      });
  }, [user]);
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
              <Myadded key={add._id} add={add}></Myadded>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
