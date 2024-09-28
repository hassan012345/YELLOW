import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/cart';

const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    console.log(cartItems);
    return (
        <div className='flex px-10 py-10'>
            <div className='w-full md:w-50 flex flex-col items-center'>
                <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="yellow" viewBox="0 0 16 16">
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                </svg>
                <div className="flex items-end flex-col md:flex-row">
                    <div className="text-5xl font-normal basis-1/5">
                        Order Summary
                        <div className="flex justify-between">
                            <p className='text-2xl font-light'>Items</p>
                            <p className='text-2xl font-light'>{cartItems.length}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className='text-2xl font-light'>Total</p>
                            <p className='text-2xl font-light'>Rs.{cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
                        </div>
                    </div>

                    <div className="flex flex-col grow basis-4/5 items-center">
                        <div className="text-5xl font-normal my-4">
                            Shipping Details
                        </div>
                        <form action="" className='py-10 px-5 sm:py-0'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div className="my-1">
                                    <label className='font-light'>
                                        Name:
                                        <input name='fullName' type="text" placeholder='Full Name' className='w-full p-2 border border-gray-300 rounded-md' />
                                    </label>
                                </div>
                                <div className="my-1">
                                    <label className='font-light'>
                                        Phone Number:
                                        <input name='phoneNumber' type="text" placeholder='Phone Number' className='w-full p-2 border border-gray-300 rounded-md' />
                                    </label>
                                </div>
                                <div className="my-1">
                                    <label className='font-light'>
                                        Address:
                                        <input name='address' type="text" placeholder='Address' className='w-full p-2 border border-gray-300 rounded-md' />
                                    </label>
                                </div>
                                <div className="my-1">
                                    <label className='font-light'>
                                        Email:
                                        <input name='email' type="email" placeholder='example@gmail.com' className='w-full p-2 border border-gray-300 rounded-md' />
                                    </label>
                                </div>
                            </div>
                            <div className='flex justify-center mt-5'>
                                <button className='bg-[yellow] text-black px-5 py-2 rounded-full' type='submit'>Send my yellow!</button>
                            </div>
                        </form>
                    </div>
                    <div className="basis-1/5">
                        <p className=' text-5xl font-normal'>
                            Payment Details
                        </p>
                        <div className='flex justify-between gap-2 my-2'>
                            <label htmlFor="credit" className='text-normal font-light'>
                                Cash on Delivery
                            </label>
                            <input type="radio" name="cod" id="cod" checked />
                        </div>
                        <div className='flex justify-between gap-2 my-2'>
                            <label htmlFor="credit" className='text-normal font-light'>
                                Credit Card
                                <span className='text-normal font-small'>
                                    Comming Soon
                                </span>
                            </label>
                            <input type="radio" name="cc" id="credit" disabled />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Checkout;