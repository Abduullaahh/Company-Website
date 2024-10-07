import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';

const features = [
  `24/7 Customer Support: Our dedicated team is always available to assist you with any queries.`,
  `Custom Software Development: Tailored solutions to meet your unique business needs.`,
  `Cloud Solutions: Scalable cloud services to enhance your operational efficiency.`,
  `Mobile App Development: Build intuitive and feature-rich mobile applications for all platforms.`,
  `Web Development: Responsive and user-friendly websites that drive engagement.`,
  `Data Analytics: Comprehensive analytics services to help you make informed decisions.`,
  `Cybersecurity Solutions: Protect your business with robust security measures.`,
  `Consultation Services: Expert advice to guide you through your digital transformation journey.`,
];

const PricingTable = () => (
  <section className={tw(`bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12`)} aria-label="Pricing Table for DevSol Services">
    <div className={tw(`relative max-w-7xl mx-auto mb-24`)}>
      <header className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
        <h1 className={tw(`text-4xl lg:text-5xl font-bold text-gray-800 mb-12`)} aria-label="DevSol Pricing Plans">Unlock Your Business Potential with DevSol</h1>
        <p className={tw(`mt-6 text-base leading-6 text-gray-500`)}>
          Discover how DevSol can transform your business with our comprehensive solutions. Join us in taking your operations to the next level.
        </p>
      </header>
      <div className={tw(`overflow-hidden lg:max-w-none lg:flex`)}>
        <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
          <div className={tw(`flex items-center`)}>
            <h2 className={tw(`flex-shrink-0 pr-4 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600`)}>
              What’s Included in Our Software Development Plans
            </h2>
            <div className={tw(`flex-1 border-t-2 border-gray-200`)} />
          </div>
          <ul className={tw(`mt-8 lg:grid lg:grid-cols-2`)}>
            {features.map((feature) => (
              <li className={tw(`flex items-center lg:col-span-1`)} key={feature}>
                <div className={tw(`flex-shrink-0`)}>
                  <Check className={tw(`h-8 w-8 mr-3 mb-1`)} alt={`Feature: ${feature}`} />
                </div>
                <p className={tw(`text-gray-600`)}>{feature}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={tw(`py-8 px-6 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12`)}>
          <p className={tw(`text-lg font-medium text-gray-800`)}>If you order now...</p>
          <div className={tw(`my-4 flex items-center justify-center text-6xl leading-none font-bold text-gray-800`)}>
            $99/mo
          </div>
          <Button primary modifier="mt-6" aria-label="Contact DevSol sales">
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
