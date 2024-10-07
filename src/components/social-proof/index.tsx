import { tw } from 'twind';
import { useState } from 'react';
import Quote from '@/constants/svg/quote.svg';

const socialProofs = [
  {
    name: `Sarah Johnson`,
    company: `Tech Innovations LLC`,
    image: `/images/social-1.webp`, // Replace with actual image URLs
    text: `DevSol's software solutions transformed our operations, enabling us to increase efficiency by 40%. Their team was responsive and dedicated, ensuring our needs were met every step of the way. We couldn't be happier with the results!`,
  },
  {
    name: `Michael Smith`,
    company: `Green Energy Corp.`,
    image: `/images/social-2.webp`, // Replace with actual image URLs
    text: `Working with DevSol has been a game-changer for us. Their innovative approach to digital transformation helped streamline our processes and improve our customer engagement significantly. I highly recommend their services!`,
  },
  {
    name: `Emma Williams`,
    company: `Smart Solutions Inc.`,
    image: `/images/social-1.webp`, // Replace with actual image URLs
    text: `Our collaboration with DevSol has been nothing short of amazing. Their expert team helped us optimize our workflow, leading to a 30% reduction in project turnaround times. We truly value their insights and support!`,
  },
  {
    name: `Daniel Brown`,
    company: `NextGen Tech`,
    image: `/images/social-2.webp`, // Replace with actual image URLs
    text: `DevSol's cutting-edge software has allowed us to scale our business effectively. Their commitment to excellence and understanding of our industry needs was pivotal in achieving our growth targets. We are grateful for their partnership!`,
  },
  {
    name: `Olivia Martinez`,
    company: `HealthTech Solutions`,
    image: `/images/social-1.webp`, // Replace with actual image URLs
    text: `The tailored solutions provided by DevSol improved our operational efficiency by over 50%. Their responsive customer service and expert guidance have made a significant impact on our productivity. Highly recommended!`,
  },
  {
    name: `James Taylor`,
    company: `Creative Agency`,
    image: `/images/social-2.webp`, // Replace with actual image URLs
    text: `Thanks to DevSol, we have successfully digitized our services. Their innovative technology and strategic insights have helped us engage better with our clients, resulting in a remarkable increase in customer satisfaction.`,
  },
  {
    name: `Sophia Anderson`,
    company: `Finance Hub Ltd.`,
    image: `/images/social-1.webp`, // Replace with actual image URLs
    text: `DevSol has been instrumental in revolutionizing our financial operations. Their bespoke solutions not only enhanced our reporting capabilities but also improved data accuracy across the board. A true partner in our journey!`,
  },
];

const SocialProof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(100);

  const next = () => {
    setFade(0); // Start fade out
    setTimeout(() => {
      if (currentIndex + 1 < socialProofs.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0); // Loop back to the first item
      }
      setFade(100); // Fade in
    }, 400); // Match the duration
  };

  const previous = () => {
    setFade(0); // Start fade out
    setTimeout(() => {
      if (currentIndex - 1 >= 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(socialProofs.length - 1); // Loop back to the last item
      }
      setFade(100); // Fade in
    }, 400); // Match the duration
  };

  return (
    <div className={tw(`container mx-auto my-8`)} aria-label="Client Testimonials">
      <div className={tw(`max-w-7xl mx-auto`)} role="document">
        <section>
          <figure>
            <div className={tw(`relative bg-white shadow-xl p-8 rounded-lg`)} role="blockquote">
              <Quote className={tw(`w-16 md:w-12 left-0 md:-left-2 absolute top-0 pl-4 md:pl-0 text-gray-300 ml-4`)} />
              <div className={tw(`pt-20 px-6 md:px-0`)} style={{ opacity: fade / 100, transition: 'opacity 0.5s ease-in-out' }}>
                <p className={tw(`text-gray-600 text-base pb-6`)}>"{socialProofs[currentIndex].text}"</p>
                <div className={tw(`flex items-center justify-between`)} aria-label="Client Information">
                  <div className={tw(`flex items-center pb-12`)}>
                    <div className={tw(`h-12 w-12`)} role="img" aria-label={socialProofs[currentIndex].name}>
                      <img
                        src={socialProofs[currentIndex].image}
                        alt={socialProofs[currentIndex].name}
                        className={tw(`h-full w-full object-cover overflow-hidden rounded-full`)}
                        height={48}
                        width={48}
                      />
                    </div>
                    <p className={tw(`text-gray-600 font-bold ml-3`)}>
                      {socialProofs[currentIndex].name} <br />
                      <span className={tw(`text-gray-600 text-base font-light`)}>
                        {socialProofs[currentIndex].company}
                      </span>
                    </p>
                  </div>
                  <div className={tw(`cursor-pointer flex pb-12`)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#CBD5E0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      onClick={previous}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#CBD5E0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      onClick={next}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </section>
      </div>
    </div>
  );
};

export default SocialProof;
