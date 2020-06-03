import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const photos = [
    {
        name: 'Photo 1',
        url: 'https://miro.medium.com/max/8064/1*h-Q0bk2t4IvUsdsntXZJXQ@2x.jpeg'
    },
    {
        name: 'Photo 2',
        url: 'https://cdn.arstechnica.net/wp-content/uploads/2016/07/IMG_3979.jpg'
    },
    {
        name: 'Photo 3',
        url: 'https://cdn.arstechnica.net/wp-content/uploads/2018/12/cardboardgiftguide.jpg'
    }
];

const carousel = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: "slides"
    }

    return (
        <Slider {...settings}> 
        {photos.map((photo) =>{
          return (
            <div>
              <img width="100%" src={photo.url} className="slideshow_img"/>
            </div>
          )
        })}
      </Slider>
    )
};

export default carousel;
