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
        { name: 'Akula', url: "https://docs.fivem.net/vehicles/akula.webp", color: 'yellow' },
        { name: 'Akuma', url: "https://docs.fivem.net/vehicles/akuma.webp", color: 'purple' },
        { name: 'Aleutian', url: "https://docs.fivem.net/vehicles/aleutian.webp", color: 'orange' },
        { name: 'Adder', url: "https://docs.fivem.net/vehicles/adder.webp", color: 'red' },
        { name: 'Aleutian', url: "https://docs.fivem.net/vehicles/aleutian.webp", color: 'orange' },
        { name: 'Akula', url: "https://docs.fivem.net/vehicles/akula.webp", color: 'yellow' },
        { name: 'Airtug', url: "https://docs.fivem.net/vehicles/airtug.webp", color: 'green' },
        { name: 'Airtug', url: "https://docs.fivem.net/vehicles/airtug.webp", color: 'green' },
        { name: 'Airport Bus', url: "https://docs.fivem.net/vehicles/airbus.webp", color: 'blue' },
        { name: 'Akuma', url: "https://docs.fivem.net/vehicles/akuma.webp", color: 'purple' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2
    };

    return (
        <div className='test'>
            <Slider {...settings}>
                {items.map((item, index) => (
                    // <button className='carNameButton'>
                    <div className='carousel-item'>
                        <button key={index} className='carousel-button' onClick={() => console.log(`clicou no ${item.name}`)}>
                            <img className='img' src={item.url} alt={item.name} style={{ width: '100%', borderRadius: '8px' }} />
                            <h3 className='button-text'> <span style={{ color: item.color }}>■ </span>{item.name}</h3>
                        </button>
                    </div>
                    // </button>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
