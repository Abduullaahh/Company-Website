import Page from '@/components/page';
import Footer from '@/components/footer';
import ProjectCards from '@/components/all-projects';
import { useRouter } from 'next/router';
import ServicesUsed from '@/components/all-projects/services-used';
import BenefitsGained from '@/components/all-projects/benefits';
import Features from '@/components/all-projects/features';
import TestimonialCard from '@/components/all-projects/testimonial';

const ProjectDetail = () => {
  const projectData = JSON.parse(localStorage.getItem('projectData'));

  return (
    <Page>
      <main>
        <div className="flex flex-col items-center">
          {projectData ? (
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', padding: '5%' }}>
              <div
                style={{ width: '50%', borderRight: '1px solid #ccc', padding: '0 5%', justifyContent: 'flex-start' }}
              >
                <img src={projectData.image} style={{ borderRadius: '50px' }} alt={projectData.alt} />
              </div>
              <div
                style={{
                  width: '50%',
                  padding: '0 5%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  height: '100%',
                }}
              >
                <h1 className="text-4xl lg:text-5xl font-bold text-left pb-4" style={{ color: '#014C8B' }}>
                  {projectData.title}
                </h1>
                <p className="text-lg text-left">{projectData.description}</p>
                <p className="text-lg text-left">
                  <strong style={{ color: '#014C8B' }}>Client:</strong>
                </p>
                <p className="text-lg text-left">
                  <strong style={{ color: '#014C8B' }}>Country:</strong>
                </p>
                <p className="text-lg text-left">
                  <strong style={{ color: '#014C8B' }}>Date:</strong>
                </p>
              </div>
            </div>
          ) : (
            <p>Loading project details...</p>
          )}
        </div>
      </main>
      <ServicesUsed />
      <BenefitsGained />
      <div
        className="flex flex-wrap items-center justify-center"
        style={{ marginTop: '10%', marginBottom: '10%', padding: '0 3%', gap: '4%' }}
      >
        <div style={{ width: '45%' }}>
          <Features />
        </div>
        <div style={{ width: '45%' }}>
          <TestimonialCard />
        </div>
      </div>
      <ProjectCards />
      <Footer />
    </Page>
  );
};

export default ProjectDetail;
