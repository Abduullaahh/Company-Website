import { useState, useEffect } from 'react';
import { tw } from 'twind/css';

const Carousel = () => {
  const slides = [
    { id: 1, image: `/images/c1.jpg`, alt: `Slide 1`, caption: `Slide 1 Caption` },
    { id: 2, image: `/images/c2.jpg`, alt: `Slide 2`, caption: `Slide 2 Caption` },
    { id: 3, image: `/images/c3.jpg`, alt: `Slide 3`, caption: `Slide 3 Caption` },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // 2 seconds interval
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className={tw(`relative w-full h-full`)}>
      {/* Slides */}
      <div className={tw(`flex transition-all duration-500 ease-in-out`)}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={tw(
              `absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex ? `opacity-100` : `opacity-0`
              }`,
            )}
          >
            <img src={slide.image} alt={slide.alt} className={tw(`w-full h-auto object-cover`)} />
            {/* <p className={tw(`absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg`)}>
              {slide.caption}
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
