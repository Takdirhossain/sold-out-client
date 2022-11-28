import React from 'react';
import { useQuery } from 'react-query';
import ReportedRow from '../components/ReportedRow';

const Allreported = () => {
    const { data:reported =  [], refetch } = useQuery({
        queryKey: ["reported"],
        queryFn: async () => {
         const res=await fetch(`http://localhost:5000/report`)
            const data=res.json()
             return data
        },
      });
     
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
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Reporter Email</th>
                <th>SellerName</th>
                <th>Deleete Product</th>
              </tr>
            </thead>
            <tbody>
             {
                reported.map(report => <ReportedRow key={report._id} report={report}></ReportedRow> )
             }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Allreported;