import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51M94shLK7u67kFYDgUTuYKUrZxREPuzhvjHWhMGa0zIqwLVfQGx7v6ZU1vGSGpdu9C6F5883Tgz7XpXlNeC9JHkl00a7gjkk3b');
const Payment = () => {
    const data = useLoaderData()


    return (
        <div>
        <h2 className='text-3xl font-semibold'>Payment For {data.model}</h2>
        <p>Please Payment <strong>${data.sell} </strong>for {data.model}</p>

        <div className='w-[50%] shadow-xl  rounded bg-cyan-200 px-5 p-20 my-10'>
            <Elements stripe={stripePromise}>
                <CheckOutForm
                data={data}
                />
            </Elements>
        </div>
    </div>
    );
};

export default Payment;