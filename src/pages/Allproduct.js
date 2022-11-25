import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useLoaderData } from 'react-router-dom';
import Loading from '../components/Loading';

const Allproduct = () => {
    const product = useLoaderData()
    const [loading, setLoading] = useState(false)
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        
        queryFn: async () => {
            setLoading(true)
            const res = await fetch(`http://localhost:5000/products?id=${product._id}`)
            const data = res.json()
            setLoading(false)
            return data
        }

    })
    console.log(products)
    return (
        <div>
            {loading? <>
            <Loading></Loading>
            </>
        : 
        <>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20' >
                {
                    products?.map(product => 
                    <div className="card card-compact w-96 bg-base-100 shadow-xl category-card">
                        <figure><img src={product.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.model}</h2>
                            <p className='text-2xl font-bold'>{product.productName}</p>
                            <p className='text-xl font-bold'>Selling Price : <span>{product.sellingprice}</span></p>
                            <p className='text-xl font-bold'>Buying Price : {product.buyprice}</p>
                            <p className='text-xl font-bold'>Location : {product.location}</p>
                            <p className='text-xl font-bold'>Year Of Use : {product.usedDay} Year</p>
                            <p className='text-xl font-bold'>Seller Name : {product.name}</p>
                            <p className='text-xl font-bold'>Poste Date : {product.time}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Book now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>    
        }
        </div>
    );
};

export default Allproduct;