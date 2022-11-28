import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Allcontext';

const CheckOutForm = ({ data }) => {

    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [transaction, setTransaction] = useState('')
    const [processing, setProcessing] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const {sellPrice,image, _id, id } = data;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    console.log(data);
    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`

            },
            body: JSON.stringify({ sellPrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [sellPrice]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        console.log(card);
        if (card == null) {
            return;
        };
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError('')
        }
        setSuccess('')
        setProcessing(true)
        const { paymentIntent, error: confirmedError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email:user.email ,
                    },
                },
            },
        );
        if (confirmedError) {
            setCardError(confirmedError.message)
            return
        }
        if (paymentIntent.status === "succeeded") {
            setSuccess('Congratulation ! your Payment Successful')
            setTransaction(paymentIntent.id)
            console.log('card info', card);
            const payment = {
                sellPrice,
                transactionId: paymentIntent.id,
                 email: user?.email,
                id,
                paymentId: _id

            }
            fetch(`http://localhost:5000/payments`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess('Congratulation ! your Payment Successful')
                        toast.success('Congratulation ! your Payment Successful',paymentIntent.id)
                        setTransaction(paymentIntent.id)
                        fetch(`http://localhost:5000/products/${id}`, {
                            method: 'DELETE',
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                            })
                        navigate('/')

                    }
                   
                })
        }
        setProcessing(false)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#05081c',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn-sm btn btn-secondary mt-16' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className='text-xl italic text-red-800 mt-2'>{cardError}</p>
            {
                success && <div>
                    <p className='text-2xl text-secondary'>{success}</p>
                    <p className='text-2xl font-bold'>Your Transaction id:{transaction}</p>
                </div>
            }
        </>
    );
};

export default CheckOutForm;