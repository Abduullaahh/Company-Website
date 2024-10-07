import { tw } from 'twind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SocialProof from '@/components/social-proof';

const logoData = [
  { src: "/logos/asare viewing.jpg", alt: "Asare Viewing" },
  { src: "/logos/smg arctic tech.jpg", alt: "SMG Arctic Tech" },
  { src: "/logos/development.jpg", alt: "Development" },
  { src: "/logos/the energy university.jpg", alt: "The Energy University" },
  { src: "/logos/netsol.jpg", alt: "Netsol" },
  { src: "/logos/neuontix.jpg", alt: "Neuontix" },
  { src: "/logos/gringo.jpg", alt: "Gringo" },
  { src: "/logos/isolve.jpg", alt: "iSolve" },
  { src: "/logos/fleet visionx.jpg", alt: "Fleet VisionX" },
  { src: "/logos/software.jpg", alt: "Software" },
];

const TrustedCompanies = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 6000, // Adjust speed for smoother transition
    slidesToShow: 4, // Adjust the number of logos shown at once
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Speed of autoplay (0 for continuous)
    cssEase: 'linear', // Smooth transition
    pauseOnHover: false, // Disable pause on hover for continuous movement
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={tw(`container mx-auto mb-8`)} style={{marginTop:'5%'}} aria-label="Trusted Companies" id='testimonials'>
      <div className={tw(`max-w-7xl mx-auto`)} role="document">
        <header className={tw(`flex justify-center w-full mb-4`)}>
          <h2 className={tw(`text-black text-4xl lg:text-4xl font-bold text-center`)}>
            Trusted by specialists all around the world
          </h2>
        </header>
        <SocialProof />
        <Slider {...settings}>
          {logoData.map((logo, index) => (
            <div className={tw(`flex items-center justify-center mx-auto`)} key={index}>
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className={tw(`m-12`)} 
                width={120} 
                height={120} // Added height for better layout control
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TrustedCompanies
