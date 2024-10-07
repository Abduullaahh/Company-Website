import { useRouter } from 'next/router';

const ProjectDetail = () => {
  const router = useRouter();
  const { slug, data } = router.query;

  // Parse the JSON string to an object
  const projectData = data ? JSON.parse(decodeURIComponent(data)) : null;

  return (
    <div className="flex flex-col items-center">
      {projectData ? (
        <>
          <h1 className="text-3xl font-bold text-center my-4">{projectData.title}</h1>
          <img src={projectData.image} alt={projectData.alt} className="w-full h-full object-cover" />
          <p className="text-lg text-center mx-4">{projectData.description}</p>
        </>
      ) : (
        <p>Loading project details...</p>
      )}
    </div>
  );
};

export default ProjectDetail;
