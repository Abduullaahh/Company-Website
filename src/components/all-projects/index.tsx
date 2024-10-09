import { tw } from 'twind';
import { useRouter } from 'next/router';

// Define the projects (reusing the 3 images for 9 projects)
const projects = [
  {
    title: `AI-Powered Solutions for Retail`,
    image: `/images/case-1.webp`,
    alt: `AI-driven retail solutions`,
    slug: `ai-powered-solutions-for-retail`,
    description: `Transforming retail by leveraging AI to deliver personalized experiences and optimize inventory management.`,
    keywords: [`AI`, `Retail`, `Personalization`],
  },
  {
    title: `Real-Time Logistics Tracking Systems`,
    image: `/images/case-2.webp`,
    alt: `Real-time logistics tracking`,
    slug: `real-time-logistics-tracking`,
    description: `Streamlining supply chain operations with real-time tracking and monitoring solutions.`,
    keywords: [`Logistics`, `Tracking`, `Supply Chain`],
  },
  {
    title: `Mobile Banking Application Development`,
    image: `/images/case-3.webp`,
    alt: `Mobile banking development`,
    slug: `mobile-banking-application-development`,
    description: `Revolutionizing digital banking with secure, user-friendly mobile applications for financial institutions.`,
    keywords: [`Banking`, `Mobile App`, `Security`],
  },
  {
    title: `AI-Powered Solutions for Retail`,
    image: `/images/case-1.webp`,
    alt: `AI-driven retail solutions`,
    slug: `ai-powered-solutions-for-retail-2`,
    description: `Transforming retail by leveraging AI to deliver personalized experiences and optimize inventory management.`,
    keywords: [`AI`, `Retail`, `Optimization`],
  },
  {
    title: `Real-Time Logistics Tracking Systems`,
    image: `/images/case-2.webp`,
    alt: `Real-time logistics tracking`,
    slug: `real-time-logistics-tracking-2`,
    description: `Streamlining supply chain operations with real-time tracking and monitoring solutions.`,
    keywords: [`Logistics`, `Monitoring`, `Tracking`],
  },
  {
    title: `Mobile Banking Application Development`,
    image: `/images/case-3.webp`,
    alt: `Mobile banking development`,
    slug: `mobile-banking-application-development-2`,
    description: `Revolutionizing digital banking with secure, user-friendly mobile applications for financial institutions.`,
    keywords: [`Mobile Banking`, `Financial`, `User Experience`],
  },
  {
    title: `AI-Powered Solutions for Retail`,
    image: `/images/case-1.webp`,
    alt: `AI-driven retail solutions`,
    slug: `ai-powered-solutions-for-retail-3`,
    description: `Transforming retail by leveraging AI to deliver personalized experiences and optimize inventory management.`,
    keywords: [`AI`, `Retail Solutions`, `Innovation`],
  },
  {
    title: `Real-Time Logistics Tracking Systems`,
    image: `/images/case-2.webp`,
    alt: `Real-time logistics tracking`,
    slug: `real-time-logistics-tracking-3`,
    description: `Streamlining supply chain operations with real-time tracking and monitoring solutions.`,
    keywords: [`Real-Time`, `Logistics`, `Tracking`],
  },
  {
    title: `Mobile Banking Application Development`,
    image: `/images/case-3.webp`,
    alt: `Mobile banking development`,
    slug: `mobile-banking-application-development-3`,
    description: `Revolutionizing digital banking with secure, user-friendly mobile applications for financial institutions.`,
    keywords: [`Mobile Banking`, `Secure`, `Innovation`],
  },
];

const ProjectCards = () => {
  const router = useRouter(); // Use the useRouter hook

  const handleProjectClick = (project) => {
    localStorage.setItem(`projectData`, JSON.stringify(project));
    router.push(`/project-description/${project.slug}`); // Navigate to project description page
  };

  return (
    <section style={{ backgroundColor: `#F7F7F7` }}>
      <div className={tw(`max-w-7xl mx-auto py-12`)}>
        <h1 className={tw(`text-gray-900 text-4xl font-bold text-center`)}>Our Projects</h1>
        <p className={tw(`text-gray-700 text-center text-xl mt-4`)}>
          Explore our latest innovative projects and their impact.
        </p>
        <div className={tw(`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-12`)}>
          {projects.map((project, index) => (
            <div key={index} onClick={() => handleProjectClick(project)}>
              <div
                className={tw(
                  `relative cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-105 flex flex-col`,
                )}
                style={{ height: `380px` }}
              >
                <div className={tw(`h-64 flex-shrink-0`)}>
                  <img src={project.image} alt={project.alt} className={tw(`h-full w-full object-cover rounded-lg`)} />
                </div>
                <div className={tw(`p-4 bg-white shadow-lg rounded-b-lg flex-grow flex flex-col justify-between`)}>
                  {/* Display Keywords */}
                  <div className={tw(`flex flex-wrap justify-left space-x-2 mb-2`)}>
                    {project.keywords.map((keyword, i) => (
                      <span
                        key={i}
                        className={tw(`text-blue-600 bg-blue-100 px-2 py-1 rounded-md text-xs font-semibold`)}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                  {/* Project Title */}
                  <p className={tw(`text-left text-gray-700 font-semibold text-lg`)}>{project.title}</p>
                  {/* Project Description */}
                  <p
                    className={tw(`text-left text-gray-500 text-sm mt-2 flex-grow overflow-hidden text-ellipsis`)}
                    style={{
                      display: `-webkit-box`,
                      WebkitLineClamp: `2`,
                      WebkitBoxOrient: `vertical`,
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;
