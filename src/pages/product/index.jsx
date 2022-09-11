import React from 'react'
import { Slider } from '../../components/slider/Slider'
import RightSide from './RightSide'
import './styles.css'
import { FaStar } from "react-icons/fa";

const Product = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='slider'>
          <Slider />
        </div>
        <RightSide />
      </div >
      <section className='discription'>

        <h1 className='header'>Burj Khalifa At the Top Ticket: Level 124 & 125 with Coffee</h1>
        <div className='rate'><span ><FaStar />4.3</span>(6761 Ratings)</div>
        <div className='options'>
          <p>Free Cancellation</p>

          <p>Instant Confirmation</p>
          <p>Mobile Ticket</p>
          <p>Flexible Hours</p>
        </div>
        <p>Experience stunning panoramic views of the Dubai skyline from the observation deck on the 124th and 125th floors of the Burj Khalifa. Follow that up with a complimentary coffee or a soft drink in the newly revamped café on the ground floor.
        </p>
      </section>
      <section className='discription'>
        <h1 className='title'>Inclusions</h1>
        <ul className='list'>
          <li>Exclusive Access to Levels 124, 125, and The Cafe</li>
          <li>Complimentary cup of coffee or a soft drink (to be picked up from the counter)</li>
          <li>Use of viewing telescopes</li>
          <li>Free WiFi at the attraction</li>
        </ul>
      </section>

    </div>
  )
}

export default Product