import React from 'react';
import { tw } from 'twind';

export const Card = () => {
  const cardData = [
    {
      title: "Our Mission",
      content: [
        {
          subheading: "Empower Businesses",
          content: "At DevSol, we strive to empower businesses by offering transformative web solutions that drive digital growth and innovation."
        },
        {
          subheading: "Digital Transformation",
          content: "We focus on enabling businesses to seamlessly transition into the digital era with customized solutions tailored to their needs."
        },
        {
          subheading: "Growth-Driven Development",
          content: "Our mission is not just to develop websites, but to create platforms that enhance visibility, engagement, and long-term growth."
        },
        {
          subheading: "Commitment to Excellence",
          content: "We are committed to delivering exceptional web development services that uphold the highest standards of quality and innovation."
        }
      ]
    },
    {
      title: "Our Expertise",
      content: [
        {
          subheading: "Web Development",
          content: "Our expertise lies in building scalable, robust web platforms that serve both front-end user experience and back-end efficiency."
        },
        {
          subheading: "Responsive Design",
          content: "We craft responsive designs that adapt seamlessly to all screen sizes, ensuring a smooth user experience on any device."
        },
        {
          subheading: "Backend Systems",
          content: "Our backend solutions are built to handle complex operations, from database management to application architecture."
        },
        {
          subheading: "Custom Solutions",
          content: "We specialize in creating customized web applications that address the specific needs and challenges of each business."
        }
      ]
    },
    {
      title: "Our Approach",
      content: [
        {
          subheading: "Client Collaboration",
          content: "We work closely with our clients throughout the development process, ensuring their input and goals are reflected in the final product."
        },
        {
          subheading: "Transparent Process",
          content: "Transparency is at the core of our approach, keeping clients informed at every stage to ensure alignment and accountability."
        },
        {
          subheading: "Results-Oriented",
          content: "Our approach is focused on delivering measurable results, ensuring that each web solution contributes directly to the client’s success."
        },
        {
          subheading: "Agile Methodology",
          content: "We adopt an agile development methodology, allowing us to adapt quickly to changing requirements and deliver solutions efficiently."
        }
      ]
    },
    {
      title: "Why Choose Us",
      content: [
        {
          subheading: "Tailored Solutions",
          content: "We provide web solutions that are uniquely tailored to meet the specific goals and challenges of your business."
        },
        {
          subheading: "Expert Team",
          content: "Our team consists of experts with diverse skills in web development, design, and technology, ensuring comprehensive solutions."
        },
        {
          subheading: "Innovative Technologies",
          content: "We leverage the latest technologies to create cutting-edge solutions that keep you ahead of the competition."
        },
        {
          subheading: "Proven Track Record",
          content: "Our portfolio of successful projects and satisfied clients speaks to the quality and reliability of our work."
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col space-y-8">
      {cardData.map((card, index) => (
        <div key={index} className={tw(`p-4 bg-white mb-4`)}> {/* Removed border and shadow */}
          <h2 className={tw(`mt-2 text-5xl lg:text-4xl font-bold tracking-tight text-gray-900 pb-4`)} style={{ borderBottom: "4px solid silver", width: "80%" }}>
            {card.title === "Why Choose Us" ? (
              <>
                <span className={tw(`text-black`)}>Why </span>
                <span style={{ color: '#4338CA' }}>Choose Us</span>
              </>
            ) : (
              <>
                <span className={tw(`text-black`)}>Our </span>
                <span style={{color:'#4338CA'}}>{card.title.split(" ")[1]}</span>
              </>
            )}
          </h2>
          {card.content.map((item, idx) => (
            <div key={idx} className={tw(`flex mb-4 mt-4`)}> {/* Flex container for subheading and content */}
              <h3 className={tw(`font-semibold text-gray-800 w-1/3`)}>{item.subheading}</h3> {/* Subheading in left column */}
              <p className={tw(`text-gray-600 w-2/3`)}>{item.content}</p> {/* Content in right column */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Card;
