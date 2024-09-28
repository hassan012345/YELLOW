import './Header.css';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/cart';
import Cart from '../components/Cart';
const Header = () => {
    
    const [showModal, setShowModal] = useState(false);
    const { cartItems, addToCart } = useContext(CartContext);

    const toggle = () => {
        setShowModal(!showModal);
    }

    return (
        <header className="header">
            <div className="brandname">
                <h1>Yellow</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            {!showModal &&
                <div className='relative' onClick={toggle}>
                    <div className="relative inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                        </svg>
                        {cartItems.length > 0 && (
                            <div className="absolute top-0 left-3 bg-blue-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                                {cartItems.length}
                            </div>
                        )}
                    </div>
                </div>
            }
            <Cart showModal={showModal} toggle={toggle} />
        </header>
    );
};
export default Header;