import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-6`)} >
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Core Features</h4>
          <p className={tw(`mt-2 text-5xl lg:text-6xl font-bold tracking-tight text-gray-900`)}>
            Transform Your Workflow with DevSol
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Boost Sales Growth</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Enhance your business performance with our solutions that optimize sales processes and 
              increase revenue potential effectively.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Enterprise-Ready Solutions</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Our platform is designed for enterprises, ensuring scalability and reliability for 
              mission-critical applications.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Unlimited Growth Potential</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Leverage our innovative tools that empower your business to scale effortlessly and 
              tap into new market opportunities.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Expert Recommendations</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Join leading experts who trust our platform to deliver effective solutions that 
              enhance performance and efficiency.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Modern Tech Stack</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Built with cutting-edge technologies, our platform ensures seamless integration 
              and a superior user experience.
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Comprehensive Integrations</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Easily connect with various tools and platforms to streamline your operations and enhance productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
