import React from 'react';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';

const Myadded = ({add, handaleDelete}) => {
   const navigate = useNavigate()
    const {productName, image, sellingprice, email, location, name,phone, _id,  time} = add

    const handalseAds = () => {
      const data = {
        productName, 
        image,
        sellingprice,
        email,
        location,
        name,
        phone,
        productid : _id


      }
      fetch('http://localhost:5000/ads', {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
      body: JSON.stringify(data)
      }).then(res => res.json())
      .then(data =>  {
        if(data.acknowledged){
          toast.success("make Ads Success")
          navigate('/')
        }
      })
    }
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
                        src={image}
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
              <td>{time}</td>
              
              <th>
                <button onClick={() => handaleDelete(add._id)} className="btn btn-ghost btn-xs">Delete</button>
              </th>
              <th>
                <button onClick={handalseAds} className="btn btn-ghost btn-xs">Ads</button>
              </th>
            </tr>
       
    );
};

export default Myadded;