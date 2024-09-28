import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
const About = () => {
    return (
        <div>
            <Header />
            <div className='mt-10 flex flex-col items-center justify-center min-h-screen'>
                <div className="font-black text-3xl text-center w-50">
                    Quality Tea Shirts.
                </div>
                {/* <div className="font-medium text-lg text-center mt-5 w-full">
                    Yellow colored Tea shirts with <span className='text-[yellow] font-bold'>'YELLOW'</span> written on them of different colors ☕👕.
                </div> */}
            </div>
            <Footer />
        </div>
    );
}

export default About;
