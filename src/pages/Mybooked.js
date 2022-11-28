import React, { useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import MybookRow from "../components/MybookRow";
import { AuthContext } from "../context/Allcontext";

const Mybooked = () => {
  const { user, loading } = useContext(AuthContext);
  const [myBookData, setMyBookData] = useState([]);
 

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setMyBookData(data))
  }, [user]);
if(loading){
  return <Loading></Loading>
}

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
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
  {
    myBookData.map(booked => <MybookRow booked={booked} key={booked._id}></MybookRow>)
  }
      
      
      
     
    </tbody>
   
    
  </table>
</div>
    </div>
  );
};

export default Mybooked;
