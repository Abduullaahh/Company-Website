import { tw } from 'twind';

const AboutUs = () => (
  <section className={tw(`py-5 bg-white`)} style={{ marginBottom: '10%', marginTop: '5%' }} id="about-us">
    <div className={tw(`max-w-7xl mx-auto px-4 lg:px-0 flex items-stretch`)}>
      {' '}
      {/* Changed to items-stretch */}
      <div className={tw(`w-full md:w-1/2 flex flex-col justify-center`)}>
        {' '}
        {/* Added flex-col and justify-center */}
        <h1
          className={tw(`text-4xl lg:text-6xl font-light text-left p-4`)}
          style={{ color: `#014C8B` }}
          aria-label="DevSol Pricing Plans"
        >
          About DevSol
        </h1>
        <div className={tw(`mt-2 text-md text-black text-left w-full`)}>
          {' '}
          {/* Removed md:w-1/2 to use full width */}
          At DevSol, we are passionate about transforming the digital landscape for businesses through innovative web
          solutions. With a team of seasoned professionals who possess a wealth of experience in web development and
          design, we specialize in creating custom websites that not only meet the unique needs of our clients but also
          drive growth and enhance their online presence. Our commitment to excellence is reflected in our collaborative
          approach, where we work closely with you to understand your goals and deliver tailored solutions that exceed
          expectations. From responsive designs that engage users to robust backend systems that ensure optimal
          performance, we leverage cutting-edge technologies to empower your business for success. Join us on this
          journey, and let DevSol be your partner in achieving digital excellence.
        </div>
      </div>
      <div className={tw(`hidden md:flex md:w-1/2`)}>
        {' '}
        {/* Changed to md:flex for better alignment */}
        <img
          src="/images/Software Development.png"
          className={tw(`h-full w-full object-cover rounded-lg`)}
          alt="Software Development"
        />
      </div>
    </div>
  </section>
);

export default AboutUs;
