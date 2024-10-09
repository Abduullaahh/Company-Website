import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Carousel from '@/components/header/carousel';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-6xl mx-auto py-20 px-14 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10`)}>
      {/* Left Side - Text Content */}
      <div className={tw(`flex flex-col pt-10 justify-center items-center min-h-full lg:min-h-[50vh]`)}>
        <h1
          className={tw(`font-sans font-bold text-4xl md:text-4xl lg:text-6xl text-left leading-snug`)}
          style={{ color: `#014A88` }}
        >
          Custom Web Development for Your Business
        </h1>
        <div className={tw(`max-w-xl`)}>
          <p className={tw(`mt-10 text-gray-500 text-left text-xl lg:text-2xl`)}>
            Enhance your online presence with our expert web development and design services, crafted to meet your
            business goals.
          </p>
        </div>
        {/* Uncomment if you want buttons */}
        {/* <div className={tw(`mt-10 flex items-center w-full`)}> */}
        {/*   <Button primary>Start Your Project</Button> */}
        {/*   <span className={tw(`mx-2`)}>or</span> */}
        {/*   <Button>Contact Our Team</Button> */}
        {/* </div> */}
      </div>

      {/* Right Side - Carousel */}
      <div className={tw(`flex justify-center pt-10 items-center min-h-full lg:min-h-[50vh] hidden lg:flex`)}>
        <Carousel />
      </div>
    </div>
  </header>
);

export default Header;
