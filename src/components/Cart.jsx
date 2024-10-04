// import PropTypes from 'prop-types'
// import { useContext } from 'react'
// import { CartContext } from '../context/cart.jsx'
// import { useNavigate } from 'react-router-dom'
// export default function Cart({ showModal, toggle }) {
//   const navigate = useNavigate();
//   const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)


//   return (
//     showModal && (
//       <div className="flex-col flex items-center fixed inset-0 left-1 md:left-2/3 min-h-screen overflow-y-auto bg-white dark:bg-black gap-4 py-4 text-black dark:text-white font-normal uppercase text-sm">
//         <div className="flex justify-between items-center w-full px-1">
//           <h1 className="text-2xl font-bold">Cart</h1>
//           <button
//             className="px-4 py-2 bg-[yellow] text-black text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
//             onClick={toggle}
//           >
//             Close
//           </button>
//         </div>
//         <div className="flex flex-col gap-4">
//           {cartItems.map((item) => (
//             <div className="flex justify-between items-center" key={item.id}>
//               <div className="flex gap-4">
//                 <img src={item.thumbnail} alt={item.title} className="rounded-md h-24" />
//                 <div className="flex flex-col">
//                   <h1 className="text-lg font-bold">{item.title}</h1>
//                   <p className="text-gray-600">{item.price}</p>
//                 </div>
//               </div>
//               <div className="flex gap-4">
//                 <button
//                   className="px-4 py-2 bg-[yellow] text-black text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
//                   onClick={() => {
//                     addToCart(item)
//                   }}
//                 >
//                   +
//                 </button>
//                 <p>{item.quantity}</p>
//                 <button
//                   className="px-4 py-2 bg-[yellow] text-black text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
//                   onClick={() => {
//                     removeFromCart(item)
//                   }}
//                 >
//                   -
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         {
//           cartItems.length > 0 ? (
//             <div className="flex flex-col justify-between items-center">
//               <div className="fixed text-center bg-gray-400 bottom-0 h-25 w-full px-4 py-4">
//                 <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
//                 <button onClick={() => navigate('/checkout')} className='px-4 py-2 my-2  bg-[yellow] text-black text-xs font-bold uppercase rounded-3xl hover:bg-black-700 focus:outline-none focus:bg-gray-700 w-full'>Get my yellow</button>
//               </div>
//               <button
//                 className="px-4 w-full py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
//                 onClick={() => {
//                   clearCart()
//                 }}
//               >
//                 Clear cart
//               </button>
//             </div>
//           ) : (
//             <h1 className="text-lg font-bold my-2">Your cart is empty</h1>
//           )
//         }
//       </div>
//     )
//   )
// }

// Cart.propTypes = {
//   showModal: PropTypes.bool,
//   toggle: PropTypes.func
// }
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'
import { useNavigate } from 'react-router-dom'
import { Transition } from 'react-transition-group'

export default function Cart({ showModal, toggle }) {
  const navigate = useNavigate();
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)

  const transitionStyles = {
    entering: { transform: 'translateX(0)' },
    entered: { transform: 'translateX(0)' },
    exiting: { transform: 'translateX(100%)' },
    exited: { transform: 'translateX(100%)' },
  }

  return (
    <Transition in={showModal} timeout={300} unmountOnExit>
      {(state) => (
        <div className="fixed inset-0 z-50 flex justify-end transition-transform duration-300 ease-in-out" style={{ ...transitionStyles[state] }}>
          <div className="relative flex-col flex items-center bg-white dark:bg-black gap-6 py-6 text-black dark:text-white font-normal uppercase text-sm w-full md:w-1/3 min-h-screen overflow-y-auto shadow-lg transition-all duration-300">
            <div className="flex justify-between items-center w-full px-6">
              <h1 className="text-3xl font-extrabold text-[yellow]">Cart</h1>
              <button
                className="px-4 py-2 bg[yellow] text-black text-xs font-bold uppercase rounded-full hover:bg-yellow-700 focus:outline-none focus:bg-yellow-800 transition-all"
                onClick={toggle}
              >
                Close
              </button>
            </div>
            <div className="flex flex-col gap-6 w-full px-6">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div className="flex justify-between items-center border-b border-gray-300 py-4" key={item.id}>
                    <div className="flex gap-6 items-center">
                      <img src={`http://localhost:3000/${item.imageUrl}`} alt={item.title} className="rounded-md h-24 w-24 object-cover" />
                      <div className="flex flex-col">
                        <h1 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h1>
                        <p className="text-gray-600 dark:text-gray-300">${item.price}</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <button
                        className="px-3 py-1 bg-[yellow] text-black text-xs font-bold uppercase  hover:bg-yellow-700 focus:outline-none focus:bg-yellow-800 transition-all"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        className="px-3 py-1 bg-[yellow] text-black text-xs font-bold uppercase hover:bg-yellow-700 focus:outline-none focus:bg-yellow-800 transition-all"
                        onClick={() => removeFromCart(item)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <h1 className="text-xl font-bold text-center text-gray-600 dark:text-gray-400">Your cart is empty</h1>
              )}
            </div>
            {cartItems.length > 0 && (
              <div className="w-full px-6 mt-auto">
                <button
                  className="px-4 w-full py-2 mb-4 bg-gray-800 text-white text-xs font-bold uppercase rounded-full hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition-all"
                  onClick={() => clearCart()}
                >
                  Clear cart
                </button>
                <div className="w-full bg-gray-400 p-4 rounded-lg shadow-lg">
                  <h1 className="text-lg font-bold text-gray-900">Total: ${getCartTotal()}</h1>
                  <button
                    onClick={() => navigate('/checkout')}
                    className="px-4 py-2 my-2 w-full bg-[yellow] text-black text-xs font-bold rounded-full hover:bg-yellow-700 focus:outline-none focus:bg-yellow-800 transition-all"
                  >
                    Get my yellow
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Transition>
  )
}

Cart.propTypes = {
  showModal: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}

