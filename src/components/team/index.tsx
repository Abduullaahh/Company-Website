import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { tw } from 'twind'

const Team = () => {
  const sliderRef = useRef(null);

  const teamMembers = [
    {
      name: "Jenny Wilson",
      imgSrc: "images/boy.jpeg",
    },
    {
      name: "Eleanor Pena",
      imgSrc: "images/boy1.jpg",
    },
    {
      name: "Robert Fox",
      imgSrc: "/images/boy.jpeg",
    },
    {
      name: "Ralph Edwards",
      imgSrc: "images/boy1.jpg",
    },
    {
      name: "Jenny Wilson",
      imgSrc: "images/boy.jpeg",
    },
    {
      name: "Eleanor Pena",
      imgSrc: "images/boy1.jpg",
    },
    {
      name: "Robert Fox",
      imgSrc: "/images/boy.jpeg",
    },
    {
      name: "Ralph Edwards",
      imgSrc: "images/boy1.jpg",
    },
  ];

  const settings = {
    dots: false, // Set dots to false to remove them
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true, // Ensure arrows are enabled
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const NextArrow = ({ onClick }) => (
    <p onClick={onClick} style={styles.arrow}>
      ►
    </p>
  );

  const PrevArrow = ({ onClick }) => (
    <p onClick={onClick} style={styles.arrow}>
      ◄
    </p>
  );

  return (
    <div style={styles.container}>
      <h2 className={tw(`mt-2 text-5xl lg:text-4xl font-bold tracking-tight text-gray-900 pb-4`)}>
        <span className={tw(`text-black`)}>Our </span>
        <span style={{color:'#4338CA'}}> Team</span>
      </h2>
      {/* <h2 style={styles.heading}>Our Success Team</h2> */}
      <div style={styles.sliderContainer}>
        <Slider ref={sliderRef} {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} style={styles.card}>
              <img src={member.imgSrc} alt={member.name} style={styles.image} />
              <h3 style={styles.name}>{member.name}</h3>
            </div>
          ))}
        </Slider>
        {/* Custom arrows will be positioned at the bottom here */}
        <div style={styles.navigationContainer}>
          <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
          <NextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 0',
    textAlign: 'center',
    overflow: 'hidden',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sliderContainer: {
    padding: '0 20px',
    overflow: 'hidden',
  },
  heading: {
    color: '#007AFF',
    fontSize: '2rem',
    marginBottom: '30px',
    fontWeight: '600',
  },
  card: {
    padding: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    backgroundColor: '#fff',
    flex: '1 0 21%', // Adjusted for responsiveness
    margin: '10px', // Added margin for spacing
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '15px',
    objectFit: 'cover',
  },
  name: {
    fontSize: '1.2rem',
    marginTop: '10px',
    color: '#333',
    fontWeight: '500',
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  arrow: {
    color: '#4338CA',
    cursor: 'pointer',
    fontWeight: '600',
    margin: '0 10px', // Add some space between arrows
  },
};

export default Team;
