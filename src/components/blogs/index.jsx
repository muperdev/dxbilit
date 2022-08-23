import React from 'react'
import mock from '../../images/desert.jpg'

const Blog = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex flex-col'>
        <div className='flex flex-col justify-end items-end w-full mr-8 text-right'>
          <img src={mock} className='rounded-lg' alt="" />
          <div className='flex flex-col w-full mt-5 text-right'>
            <p className='text-xs font-bold'>طبیعت دبی</p>
            <p className='text-base font-semibold my-2 text-right'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک</p>
            <p className='text-gray-400 text-sm'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود،
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog