import { useParams, Navigate } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';
import { projectDetails } from '@/data/projects';

const ProjectPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  if (!projectId || !projectDetails[projectId]) {
    return <Navigate to="/" replace />;
  }

  const projectData = projectDetails[projectId];

  return <ProjectDetail {...projectData} />;
};

export default ProjectPage;
