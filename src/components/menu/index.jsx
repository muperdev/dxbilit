import React, { useState } from 'react'
import Logo from '../../images/dxlogo.png'
import { ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
} from "@material-tailwind/react";

const Menu = () => {
    const [menuIsOpen, setMenuOpen] = useState(false)

    return (
        <div className='flex justify-center items-center w-full py-3 flex-row-reverse'>
            <div style={{zIndex: '1'}} className='responsive text-sm lg:text-base flex justify-between items-center flex-row-reverse top-0 fixed bg-white py-4'>
                <img src={Logo} width={70} alt="" />
                <ul className='flex justify-center items-center flex-row-reverse'>
                    <button
                        style={{ fontSize: '15px' }}
                        className='font-semibold text-gray-900 rounded-2xl px-6 py-2 hover:bg-blue-400 hover:bg-opacity-10 hover:text-blue-500 delay-75 transition-all whitespace-nowrap'
                    >
                        صفحه اصلی
                    </button>
                    {/* <Popover
                        open={menuIsOpen}

                    >
                        <PopoverHandler>
                            <button
                                style={{ fontSize: '15px' }}
                                className='font-semibold text-gray-900 rounded-2xl px-6 py-2 hover:bg-blue-400 hover:bg-opacity-10 hover:text-blue-500 delay-75 transition-all whitespace-nowrap'
                                onMouseEnter={() => {
                                    setMenuOpen(true)
                                }}
                                onMouseLeave={() => {
                                    setMenuOpen(false)
                                }}
                            >
                                تفریحات
                            </button>
                        </PopoverHandler>
                        <PopoverContent
                        style={{zIndex: '2'}}
                            onMouseEnter={() => {
                                setMenuOpen(true)
                            }}
                            onMouseLeave={() => {
                                setMenuOpen(false)
                            }}
                        >
                            This is a very beautiful popover, show some love.
                        </PopoverContent>
                    </Popover> */}
                    <button
                                style={{ fontSize: '15px' }}
                                className='font-semibold text-gray-900 rounded-2xl px-6 py-2 hover:bg-blue-400 hover:bg-opacity-10 hover:text-blue-500 delay-75 transition-all whitespace-nowrap'
                                onMouseEnter={() => {
                                    setMenuOpen(true)
                                }}
                                onMouseLeave={() => {
                                    setMenuOpen(false)
                                }}
                            >
                                تفریحات
                            </button>
                    <button
                        style={{ fontSize: '15px' }}
                        className='font-semibold text-gray-900 rounded-2xl px-6 py-2 hover:bg-blue-400 hover:bg-opacity-10 hover:text-blue-500 delay-75 transition-all whitespace-nowrap'
                    >
                        تماس با ما
                    </button>
                    <button
                        style={{ fontSize: '15px' }}
                        className='font-semibold text-gray-900 rounded-2xl px-6 py-2 hover:bg-blue-400 hover:bg-opacity-10 hover:text-blue-500 delay-75 transition-all whitespace-nowrap'
                    >
                        سوالات متداول
                    </button>
                </ul>
                <div className='flex justify-between items-center gap-5 flex-row-reverse'>
                    <UserCircleIcon className='cursor-pointer hover:text-blue-600' width={30} />
                    <ShoppingBagIcon className='cursor-pointer hover:text-blue-600' width={30} />
                </div>
            </div>
        </div>
    )
}

export default Menu