import React from 'react'
import Slider from "react-slick";
import Image1 from "../assets/landingPagePic/Screenshot 2024-06-12 190817.png"
import Image2 from "../assets/landingPagePic/Screenshot 2024-06-12 190832.png"
import Image3 from "../assets/landingPagePic/Screenshot 2024-06-12 190901.png"
import Image4 from "../assets/landingPagePic/Screenshot 2024-06-12 190919.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Navbar';


const LandingPageData = [
    {
      id: 1,
      img: Image1,
    },
    {
      id: 2,
      img: Image2,
    },
    {
      id: 3,
      img: Image3,
    },
    {
        id: 4,
        img: Image4,
      },
  ];

const Home = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
     
      };
  return (
    <div className='home-wrapper'>
    <Navbar/>
    <Slider {...settings} className='slider'>
      {LandingPageData.map((data) => (
        <div key={data.id} style={{ display: 'flex', justifyContent: 'center',height:"100%" }}>
          <img
            src={data.img}
            alt=""
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      ))}
    </Slider>
  </div>
  )
}

export default Home