import React from 'react';
import { Globe, Smartphone, Share2, Lightbulb, Code, Layers, Pen, Cog, Monitor } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center transition duration-300 ease-in-out hover:bg-gray-100">
    <Icon className="w-12 h-12 mx-auto mb-4" style={{ color: `#0167B1` }} />
    <h3 className="text-xl font-bold text-navy-800 mb-2 transition duration-300 ease-in-out hover:text-blue-500 relative">
      {title}
    </h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: `Web Development`,
      description: `Deliver high-quality web development, design, and functionality tailored for your business, ensuring a seamless user experience and innovative solutions.`,
    },
    {
      icon: Smartphone,
      title: `Mobile App Development`,
      description: `Create seamless and engaging mobile applications designed to meet your specific business needs and enhance user experience.`,
    },
    {
      icon: Share2,
      title: `Digital Marketing`,
      description: `Boost your online presence with strategic digital marketing solutions that drive traffic, engagement, and conversions.`,
    },
    {
      icon: Lightbulb,
      title: `Generative AI`,
      description: `Harness the power of generative AI to create innovative and intelligent solutions that enhance your business processes and customer interactions.`,
    },
    {
      icon: Code,
      title: `Custom Development`,
      description: `Provide bespoke software development solutions tailored to your unique business requirements, ensuring optimal performance and scalability.`,
    },
    {
      icon: Layers,
      title: `Product Development`,
      description: `Drive innovation and bring your ideas to life with comprehensive product development services, from initial concept to final market-ready product.`,
    },
    {
      icon: Pen,
      title: `Graphic Design`,
      description: `Craft visually stunning and impactful graphic designs that elevate your brand identity and captivate your audience.`,
    },
    {
      icon: Cog,
      title: `DevOps`,
      description: `Optimize your software development lifecycle with DevOps practices that enhance collaboration, automation, and continuous delivery for faster and more reliable deployments.`,
    },
    {
      icon: Monitor,
      title: `UI/UX Design`,
      description: `Enhance user engagement and satisfaction with intuitive and aesthetically pleasing UI/UX design tailored to your target audience and business objectives.`,
    },
  ];

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-navy-800 text-center mb-16" style={{ color: `#014A88` }}>
          Our Services
        </h2>
        <div className="flex flex-wrap -mx-2" style={{ padding: `0 8%` }}>
          {services.map((service, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4 px-3 mb-8">
              <div
                className="bg-white shadow-lg rounded-lg p-4 flex flex-col h-full transition duration-300 ease-in-out hover:bg-gray-100"
                style={{ minHeight: `250px` }} // Default bg-white with hover effect to change bg
              >
                <ServiceCard {...service} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
