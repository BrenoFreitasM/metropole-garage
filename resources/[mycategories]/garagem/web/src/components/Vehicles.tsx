import React from 'react';
import Slider from 'react-slick';
import './Vehicles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselItem {
    url: string;
    name: string;
    color: string;
}

const Carousel: React.FC = () => {

    const items: CarouselItem[] = [
        { name: 'Adder', url: "https://docs.fivem.net/vehicles/adder.webp", color: 'red' },
        { name: 'Airport Bus', url: "https://docs.fivem.net/vehicles/airbus.webp", color: 'blue' },
        { name: 'Airtug', url: "https://docs.fivem.net/vehicles/airtug.webp", color: 'green' },
        { name: 'Akula', url: "https://docs.fivem.net/vehicles/akula.webp", color: 'yellow' },
        { name: 'Akuma', url: "https://docs.fivem.net/vehicles/akuma.webp", color: 'purple' },
        { name: 'Aleutian', url: "https://docs.fivem.net/vehicles/aleutian.webp", color: 'orange' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className='test'>
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div key={index} className='carousel-item'>
                        <img src={item.url} alt={item.name} style={{ width: '100%', borderRadius: '8px' }} />
                        <h3 style={{ color: item.color }}>{item.name}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
