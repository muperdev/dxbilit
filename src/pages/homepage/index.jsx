import React, { useState } from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import slide from '../../images/Background.jpg'
import slide1 from '../../images/Background1.jpg'
import banner from '../../images/dubai.jpg'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";


const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 4000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )
  return (
    <div className='w-full flex flex-col justify-center items-center mt-20'>
      <div className="navigation-wrapper w-9/12">
        <div ref={sliderRef} className="keen-slider rounded-xl">
          <img src={slide1} className="keen-slider__slide w-full" alt="" />
          <img src={slide} className="keen-slider__slide w-full" alt="" />
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      <div className='flex justify-between items-center my-6 rounded-xl border-2 border-gray-300 px-4 py-3 w-9/12 text-right text-2xl '>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.35719 0C14.5168 0 18.7137 4.19687 18.7137 9.35648C18.7137 11.7908 17.7795 14.011 16.2507 15.6772L19.2588 18.679C19.5404 18.9606 19.5413 19.416 19.2598 19.6975C19.1195 19.8397 18.9341 19.9099 18.7496 19.9099C18.5661 19.9099 18.3816 19.8397 18.2404 19.6994L15.196 16.6635C13.5945 17.9461 11.5639 18.7139 9.35719 18.7139C4.19758 18.7139 -0.000244141 14.5161 -0.000244141 9.35648C-0.000244141 4.19687 4.19758 0 9.35719 0ZM9.35719 1.44123C4.99218 1.44123 1.44099 4.99147 1.44099 9.35648C1.44099 13.7215 4.99218 17.2727 9.35719 17.2727C13.7212 17.2727 17.2724 13.7215 17.2724 9.35648C17.2724 4.99147 13.7212 1.44123 9.35719 1.44123Z" fill="#282828" />
        </svg>
        <input
          className='focus:outline-none w-full text-right'
          placeholder=' ... جستجو'
          type="text"
        />
      </div>
      <div className='my-6 w-9/12 flex flex-col'>
        <p className='text-right w-full lg:mb-16 text-2xl font-bold text-gray-800'>
          تفریحات آبی
        </p>
        <div className='grid grid-cols-3 gap-10 justify-between items-center '>
          <Card className="">
            <CardHeader color="blue" className="relative h-56">
              <img
                src={banner}
                alt="img-blur-shadow"
                className="h-full w-full rounded-xl"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                Cozy 5 Stars Apartment
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to "Naviglio" where you can enjoy the main night life in
                Barcelona.
              </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
              <Typography variant="small">$899/night</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                Barcelona, Spain
              </Typography>
            </CardFooter>
          </Card>
          <Card className="">
            <CardHeader color="blue" className="relative h-56">
              <img
                src={banner}
                alt="img-blur-shadow"
                className="h-full w-full rounded-xl"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                Cozy 5 Stars Apartment
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to "Naviglio" where you can enjoy the main night life in
                Barcelona.
              </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
              <Typography variant="small">$899/night</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                Barcelona, Spain
              </Typography>
            </CardFooter>
          </Card>
          <Card className="">
            <CardHeader color="blue" className="relative h-56">
              <img
                src={banner}
                alt="img-blur-shadow"
                className="h-full w-full rounded-xl"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                Cozy 5 Stars Apartment
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to "Naviglio" where you can enjoy the main night life in
                Barcelona.
              </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
              <Typography variant="small">$899/night</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                Barcelona, Spain
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className='my-6 w-9/12 flex flex-col'>
        <p className='text-right w-full lg:mb-16 text-2xl font-bold text-gray-800'>
          تفریحات گردشگری
        </p>
        <div className='grid grid-cols-3 gap-10 justify-between items-center '>
          <Card className="">
            <CardHeader color="blue" className="relative h-56">
              <img
                src={banner}
                alt="img-blur-shadow"
                className="h-full w-full rounded-xl"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                Cozy 5 Stars Apartment
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to "Naviglio" where you can enjoy the main night life in
                Barcelona.
              </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
              <Typography variant="small">$899/night</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                Barcelona, Spain
              </Typography>
            </CardFooter>
          </Card>
          <Card className="">
            <CardHeader color="blue" className="relative h-56">
              <img
                src={banner}
                alt="img-blur-shadow"
                className="h-full w-full rounded-xl"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                Cozy 5 Stars Apartment
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to "Naviglio" where you can enjoy the main night life in
                Barcelona.
              </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
              <Typography variant="small">$899/night</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                Barcelona, Spain
              </Typography>
            </CardFooter>
          </Card>
          <Card className="">
            <CardHeader color="blue" className="relative h-56">
              <img
                src={banner}
                alt="img-blur-shadow"
                className="h-full w-full rounded-xl"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                Cozy 5 Stars Apartment
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to "Naviglio" where you can enjoy the main night life in
                Barcelona.
              </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
              <Typography variant="small">$899/night</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                Barcelona, Spain
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className='my-6 w-9/12 flex flex-col'>
        <p className='text-right w-full lg:mb-16 text-2xl font-bold text-gray-800'>
          تفریحات هیجانی
        </p>
        <div className='grid grid-cols-3 gap-10 justify-between items-center '>
          <Card className="">
            <CardHeader color="blue" className="relative h-56">
              <img
                src={banner}
                alt="img-blur-shadow"
                className="h-full w-full rounded-xl"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                Cozy 5 Stars Apartment
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to "Naviglio" where you can enjoy the main night life in
                Barcelona.
              </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
              <Typography variant="small">$899/night</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                Barcelona, Spain
              </Typography>
            </CardFooter>
          </Card>
          <Card className="">
            <CardHeader color="blue" className="relative h-56">
              <img
                src={banner}
                alt="img-blur-shadow"
                className="h-full w-full rounded-xl"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                Cozy 5 Stars Apartment
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to "Naviglio" where you can enjoy the main night life in
                Barcelona.
              </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
              <Typography variant="small">$899/night</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                Barcelona, Spain
              </Typography>
            </CardFooter>
          </Card>
          <Card className="">
            <CardHeader color="blue" className="relative h-56">
              <img
                src={banner}
                alt="img-blur-shadow"
                className="h-full w-full rounded-xl"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                Cozy 5 Stars Apartment
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to "Naviglio" where you can enjoy the main night life in
                Barcelona.
              </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
              <Typography variant="small">$899/night</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                Barcelona, Spain
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className='my-6 w-9/12 flex flex-col'>
        <p className='text-right w-full lg:mb-16 text-2xl font-bold text-gray-800'>
          تفریحات آبی
        </p>
        <div className='grid grid-cols-3 gap-10 justify-between items-center '>
          <Card className="">
            <CardHeader color="blue" className="relative h-56">
              <img
                src={banner}
                alt="img-blur-shadow"
                className="h-full w-full rounded-xl"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                Cozy 5 Stars Apartment
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to "Naviglio" where you can enjoy the main night life in
                Barcelona.
              </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
              <Typography variant="small">$899/night</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                Barcelona, Spain
              </Typography>
            </CardFooter>
          </Card>
          <Card className="">
            <CardHeader color="blue" className="relative h-56">
              <img
                src={banner}
                alt="img-blur-shadow"
                className="h-full w-full rounded-xl"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                Cozy 5 Stars Apartment
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to "Naviglio" where you can enjoy the main night life in
                Barcelona.
              </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
              <Typography variant="small">$899/night</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                Barcelona, Spain
              </Typography>
            </CardFooter>
          </Card>
          <Card className="">
            <CardHeader color="blue" className="relative h-56">
              <img
                src={banner}
                alt="img-blur-shadow"
                className="h-full w-full rounded-xl"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                Cozy 5 Stars Apartment
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to "Naviglio" where you can enjoy the main night life in
                Barcelona.
              </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
              <Typography variant="small">$899/night</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                Barcelona, Spain
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

export default HomePage