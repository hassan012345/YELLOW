import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/cart';

const Shirts = () => {
    const [products, setProducts] = useState([]);
    const { cartItems, addToCart } = useContext(CartContext);

    async function getProducts() {
        const response = await fetch('https://dummyjson.com/products')  // fetch the products
        const data = await response.json() // convert the response to json
        setProducts(data.products) // set the products in the state to the products we fetched
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className='flex flex-col justify-center bg-gray-100'>
            <div className='flex justify-between items-center px-20 py-5'>
                <h1 className='text-2xl uppercase font-bold mt-10 text-center mb-10'>Shirts</h1>
                <div>
                    <select class="border rounded-md px-2 py-1 mr-2">
                        <option>Shirt Size</option>
                        <option name='sm'>Small</option>
                        <option name='md'>Medium</option>
                        <option name='lg'>Large</option>
                    </select>
                    <select class="border rounded-md px-2 py-1">
                        <option>Print Color</option>
                        <option name='white'>White</option>
                        <option name='red'>Red</option>
                        <option name='blue'>Blue</option>
                        <option name='green'>Green</option>
                        <option name='black'>Black</option>
                    </select>
                </div>
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg> */}
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10'>
                {
                    products.map(product => (
                        <div key={product.id} className='bg-white shadow-md rounded-lg px-10 py-10'>
                            <img src={product.thumbnail} alt={product.title} className='rounded-md h-48' />
                            <div className='mt-4'>
                                <h1 className='text-lg uppercase font-bold'>{product.title}</h1>
                                <p className='mt-2 text-gray-600 text-sm'>{product.description.slice(0, 40)}...</p>
                                <p className='mt-2 text-gray-600'>${product.price}</p>
                            </div>
                            <div className='mt-6 flex justify-between items-center'>
                                <button onClick={() => addToCart(product)} className='px-4 py-2 bg-[yellow] text-black text-xs font-bold uppercase rounded hover:bg-black-700 focus:outline-none focus:bg-gray-700'>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Shirts;
