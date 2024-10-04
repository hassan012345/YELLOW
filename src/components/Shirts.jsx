import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/cart';
import { toast, ToastContainer } from 'react-toastify';

const Shirts = () => {
    const [shirts, setShirts] = useState([]);
    const [filteredShirts, setFilteredShirts] = useState([]);
    const { cartItems, addToCart } = useContext(CartContext);
    const [filterOptions, setFilterOptions] = useState({
        size: null,
        color: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilterOptions({
            ...filterOptions,
            [name]: value
        })
    }

    async function getShirts() {
        const response = await fetch('http://localhost:3000/api/shirts');
        if (response.ok) {
            const data = await response.json();
            setShirts(data);
        }
        else {
            console.error('Failed to fetch shirts');
            toast.error('Failed to fetch shirts');
        }
    }

    useEffect(() => {
        getShirts();
    }, []);

    console.log(shirts);

    return (
        <div className='flex flex-col justify-center bg-gray-100 py-2'>
            <div className='flex justify-between items-center px-5 md:px-20 py-5'>
                <h1 className='text-2xl uppercase font-bold mt-10 text-center mb-10'>Shirts</h1>
                {/* <div>
                    <select name='size' value={null} onChange={handleChange} class="border rounded-md px-2 py-1 mr-2">
                        <option>Shirt Size</option>
                        <option name='sm'>Small</option>
                        <option name='md'>Medium</option>
                        <option name='lg'>Large</option>
                    </select>
                    <select name='color' value={null} onChange={handleChange} class="border rounded-md px-2 py-1">
                        <option>Print Color</option>
                        <option name='white'>White</option>
                        <option name='red'>Red</option>
                        <option name='blue'>Blue</option>
                        <option name='green'>Green</option>
                        <option name='black'>Black</option>
                    </select>
                </div> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg> */}
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10'>
                {
                    shirts.map(shirt => (
                        <div key={shirt.id} className='bg-white shadow-md rounded-lg'>
                            <img src={`http://localhost:3000/${shirt.imageUrl}`} className='rounded-md w-full h-auto' />
                            <div className="px-5">
                                <div className='mt-4'>
                                    <h1 className='text-lg font-bold'>Size</h1>
                                    <p className='mt-2 text-gray-600 text-sm'>{shirt.size}</p>
                                    <h1 className='text-lg font-bold mt-4'>Text Color</h1>
                                    <p className='mt-2 text-gray-600'>{shirt.textColor}</p>
                                    <h1 className='text-lg font-bold mt-4'>Price</h1>
                                    <p className='mt-2 text-gray-600'>{shirt.price}</p>
                                </div>
                                <div className='mt-6 flex justify-between items-center'>
                                    <button onClick={() => addToCart(shirt)} className='px-4 py-2 bg-[yellow] text-black text-xs font-bold uppercase rounded hover:bg-black-700 focus:outline-none focus:bg-gray-700'>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <ToastContainer />
        </div>
    );
}

export default Shirts;