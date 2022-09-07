import React from 'react'
import { Link } from 'react-router-dom'
import Blog from '../../components/blogs/index'
import mock from '../../images/photo.jpg'

const Blogs = () => {

  return (
    <div className='flex flex-col justify-center items-center'>
      <Link to={'blog/id'} className='flex flex-col-reverse lg:flex-row justify-between items-center px-4 w-full lg:w-10/12 my-10'>
        <div className='flex flex-col justify-center items-center lg:justify-end mt-3 lg:mt-0 lg:items-end w-full lg:w-3/4 mr-8 text-right'>
          <p className='lg:text-base text-lg font-bold hidden lg:block'>طبیعت دبی</p>
          <p className='text-sm font-bold text-gray-400 my-2 lg:block hidden'> تیر 1401</p>
          <p className='text-2xl font-semibold my-2 leading-10 text-right'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک</p>
          <p className='text-gray-400 my-2 lg:my-4'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود،
          </p>
        </div>
        <img src={mock} className='w-full lg:w-1/4 rounded-lg' alt="" />
      </Link>
      <div className='flex justify-center items-center my-8 '>
        <p style={{color: '#659dbd'}} className='text-3xl mb-4 font-semibold'>
          تمامی مطالب 
        </p>
      </div>
      <div className='flex flex-col lg:grid grid-cols-3 gap-10 w-10/12'>
        <Blog />
      </div>
    </div>
  )
}

export default Blogs