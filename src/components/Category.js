import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';


    const Category = () => {
        const { data: categories = [] } = useQuery({
            queryKey: ['categories'],
            queryFn: async () => {
                const res = await fetch('http://localhost:5000/category')
                const data = res.json()
                return data
            }
        })
       
      
    
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
            {
                categories.map(category =>
                    <div key={category._id} className="card w-96 bg-base-100 shadow-xl category-card">
                        <figure><img src={category?.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{category?.category}</h2>
                            <div className="card-actions justify-end">
                              <Link className='btn-primary btn' to={`/allproduct/${category._id}`}>Show Available Device</Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Category;