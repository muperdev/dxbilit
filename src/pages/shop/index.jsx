import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/outline';
import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BASEURL } from '../../constants';
import Logo from '../../images/logo.png';
import banner from '../../images/shopBanner.png';
import axios from "axios";
import { etf } from '../../utils/FaTools';
import { useState } from 'react';
import Star from '../../images/star-icon.webp'
import NavBlack from '../../components/navblack';

const Shop = () => {
  const [productsItem, setProducts] = useState([]);
  const [cat, setCat] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
    getCat();
  }, []);

  const getProducts = () => {
    axios.get(`${BASEURL}/product/all?category=${params.id}`).then((response) => {
      console.log(response?.data?.data?.products)
      setProducts(response?.data?.data?.products)
    });
  };

  const getCat = () => {
    axios.get(`${BASEURL}/category/${params.id}`).then((response) => {
      console.log(response?.data?.data)
      setCat(response?.data?.data?.category.children)
    });
  };

  return (
    <div className='flex flex-col items-center w-full h-full'>
      <NavBlack />
      <div className='flex flex-col w-full'>
        <img src={banner} alt="" />
        <div className='flex justify-between px-3'>
          <div className='lg:w-10/12 grid grid-cols-2 lg:grid-cols-5 gap-x-7 py-5 px-6 rounded-2xl border-2 items-start justify-start'>
            {
              productsItem.map((item, ids) => {
                const imageurl = `${BASEURL}${item.images[0]}`;
                return (
                  <div className='flex flex-col w-full bg-white opacity-100 rounded-xl cursor-pointer'>
                    <img src={imageurl} className='w-full rounded-2xl' alt="" />
                    <div className='flex flex-col py-2 text-center px-3'>
                      <h1 className='font-medium text-right mt-1 text-lg'>
                        {item.title}
                      </h1>
                      <div className='flex justify-between items-center mt-5 w-max'>
                        <img src={Star} width={18} alt="" />
                        <p style={{ color: '#282828' }} className='text-md font-medium ml-2 mt-1 flex'>
                          ۴.۱
                        </p>
                      </div>
                      <div className='w-full flex justify-between mt-3 items-center'>
                        <div className='flex justify-between items-center w-max'>
                          <p className='text-md font-medium'>تومان</p>
                          <p className='ml-2 font-medium text-lg'>{etf(item.price)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='w-2/12 h-full px-3'>
            <div className='bg-gray-100 rounded-2xl px-2 py-2'>
              {
                cat.map((category, id) => {
                  console.log(category)
                  return (
                    <p
                      onClick={() => {
                        navigate(`/shop/${category._id}`, { replace: true })
                        window.location.reload()
                      }}
                      className='text-xl font-medium text-center py-4 border-b-2 hover:bg-gray-800 hover:text-white cursor-pointer'
                    >
                      {category.title}
                    </p>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop