import React from 'react'
import {
    FaInstagram,
    FaFacebookF,
    FaTwitter
} from "react-icons/fa";

const Menu = () => {
    return (
        <div className='flex justify-center items-center w-full shadow-sm py-4'>
            <div className='flex justify-between items-center w-10/12'>
                <input
                    type="text"
                    className='px-3 py-2 border-2 border-gray-100 rounded-2xl w-6/12 lg:w-3/12'
                    placeholder='Search ...'
                />
                <p style={{ color: '#659dbd' }} className='text-2xl font-bold'>
                    DXBILIT
                </p>
                <div className='hidden lg:grid grid-cols-3 gap-4'>
                    <FaInstagram />
                    <FaTwitter />
                    <FaFacebookF />
                </div>
                <a href='#' style={{ color: '#daad86' }} className='text-xl font-semibold lg:block hidden'>
                    Blogs
                </a>
            </div>
        </div>
    )
}

export default Menu