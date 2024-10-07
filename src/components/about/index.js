import { tw } from 'twind';

const AboutUs = () => {
  return (
    <section className={tw(`py-5 bg-white`)} style={{marginBottom:"10%", marginTop:"5%"}} id="about-us">
      <div className={tw(`max-w-7xl mx-auto px-4 lg:px-0 flex items-center`)}>
        <div className={tw(`mt-2 text-lg text-black text-center w-full md:w-1/2`)}>
          At DevSol, we are passionate about transforming the digital landscape for businesses through innovative web solutions. With a team of seasoned professionals who possess a wealth of experience in web development and design, we specialize in creating custom websites that not only meet the unique needs of our clients but also drive growth and enhance their online presence. Our commitment to excellence is reflected in our collaborative approach, where we work closely with you to understand your goals and deliver tailored solutions that exceed expectations. From responsive designs that engage users to robust backend systems that ensure optimal performance, we leverage cutting-edge technologies to empower your business for success. Join us on this journey, and let DevSol be your partner in achieving digital excellence.
        </div>
        <div className={tw(`hidden md:block w-1/2`)}>
          <img src='/images/Software Development.png' className={tw(`h-full w-full object-cover rounded-lg`)} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
