import { tw } from 'twind';
import Particles from 'react-tsparticles';
import Arrow from '@/constants/svg/arrow.svg';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter for navigation

const ParticleBg = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 400,
          density: {
            enable: true,
            value_area: 3000,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          direction: `right`,
          speed: 0.3,
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
          },
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: false,
          },
        },
      },
      retina_detect: true,
    }}
  />
);

const projects = [
  {
    title: `AI-Powered Solutions for Retail: Transforming Customer Experiences`,
    image: `/images/case-1.webp`,
    alt: `AI-driven retail solutions for enhanced customer experience.`,
    slug: `ai-powered-solutions-for-retail`,
    description: `Our AI-Powered Solutions for Retail enhance customer experiences by providing personalized recommendations and automated inventory management, ensuring retailers meet customer demands effectively.`,
  },
  {
    title: `Real-Time Logistics Tracking Systems: Streamlining Supply Chains`,
    image: `/images/case-2.webp`,
    alt: `Logistics solutions that provide real-time tracking for efficient operations.`,
    slug: `real-time-logistics-tracking`,
    description: `Our Real-Time Logistics Tracking Systems empower businesses to streamline their supply chains by providing accurate tracking and status updates, resulting in improved operational efficiency and customer satisfaction.`,
  },
  {
    title: `Mobile Banking Application Development: FinTech Innovation`,
    image: `/images/case-3.webp`,
    alt: `Innovative mobile banking solutions for modern financial services.`,
    slug: `mobile-banking-application-development`,
    description: `We specialize in developing innovative mobile banking applications that offer secure transactions, seamless user interfaces, and advanced features to enhance the overall banking experience for customers.`,
  },
  // Add more project objects here
];

const ProjectsSection = () => {
  const router = useRouter(); // Use the useRouter hook

  const handleProjectClick = (project) => {
    localStorage.setItem(`projectData`, JSON.stringify(project));
    router.push(`/project-description/${project.slug}`); // Navigate to project description page
  };

  return (
    <section>
      <div
        className={tw(`w-full min-h-screen relative`)}
        style={{ backgroundImage: `linear-gradient(to right, #014783, #0287DF)` }}
        aria-label="Projects Overview"
        id="projects"
      >
        <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)}>
          <ParticleBg />
        </div>
        <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`)}>
          <h1 className={tw(`text-white text-4xl lg:text-5xl font-bold text-center`)}>
            Our Projects: Innovation in Action
          </h1>
          <p className={tw(`text-white text-center text-xl mt-12`)}>
            Discover how our innovative projects have transformed industries and driven digital transformation. Explore
            our portfolio of success stories and the impact of our solutions.
          </p>
          <div className={tw(`mx-auto pt-24`)}>
            <div className={tw(`w-full flex flex-wrap justify-around`)}>
              {projects.map((project) => (
                <div
                  key={project.slug}
                  className={tw(
                    `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105`,
                  )}
                  onClick={() => handleProjectClick(project)} // Handle click here
                >
                  <div>
                    <div className={tw(`h-64 z-20`)}>
                      <img
                        src={project.image}
                        alt={project.alt}
                        className={tw(`h-full w-full object-cover overflow-hidden rounded`)}
                        width={400}
                        height={300}
                      />
                    </div>
                    <div className={tw(`p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`)}>
                      <p className={tw(`uppercase text-sm text-gray-700 text-center pb-1`)}>Project Overview</p>
                      <p className={tw(`text-gray-500 text-center pb-1 text-sm`)}>{project.title}</p>
                    </div>
                  </div>
                </div>
              ))}
              <span
                className={tw(
                  `-mt-8 pb-12 lg:mt-4 flex items-center text-xl text-white cursor-pointer z-30 transition-all duration-300 hover:mr-6 hover:ml-2`,
                )}
              >
                See all projects
                <Arrow
                  className={tw(
                    `h-6 w-6 fill-current ml-2 transition-transform duration-300 transform hover:translate-x-2`,
                  )}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
