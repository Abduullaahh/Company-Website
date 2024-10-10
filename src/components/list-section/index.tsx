import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const listItems = [
  {
    title: `Creative Designers`,
    description: `Transform your ideas into stunning visuals. Our UX/UI design team 
    crafts experiences that engage users and elevate brands in the digital landscape.`,
  },
  {
    title: `Expert Developers`,
    description: `Leverage our web development services to build robust, scalable solutions. 
    Our agile development process ensures timely delivery and quality assurance.`,
  },
  {
    title: `Dedicated Product Owners`,
    description: `Guiding your project from conception to launch, our product owners ensure 
    your digital transformation aligns with business objectives for maximum impact.`,
  },
];

const ListSection = () => (
  <section className={tw(`lg:py-28 pt-28 overflow-hidden`)} id="features">
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-silver-300 font-semibold tracking-wide uppercase`)}>Grow your revenue</h2>
        <p
          className={tw(`mt-2 pb-4 text-5xl lg:text-5xl font-bold tracking-tight text-gray-900`)}
          style={{ color: `#014A88` }}
        >
          Transform your business
        </p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
            {listItems.map((item, index) => (
              <li className={tw(`flex -mx-4`)} key={item.title}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50`)}
                    style={{ color: '#014C8B', backgroundColor: 'rgb(212 222 230)' }}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
            <FeatureSvg width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
