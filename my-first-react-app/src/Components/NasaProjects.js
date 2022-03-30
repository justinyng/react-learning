import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const NasaProjects = () => {
  const [projects, setProjects] = useState([]);

  const config = {
    params: {
      updatedSince: '2022-3-22',
      api_key: 'DEMO_KEY',
    },
  };

  React.useEffect(() => {
    axios
      .get(`https://api.nasa.gov/techport/api/projects`, config)
      .then((res) => {
        const newProjects = res.data.projects;

        setProjects(newProjects);
      });
  }, []);

  return (
    <div>
      <h1>https://api.nasa.gov/techport/api/projects</h1>
      <ul>
        {projects.map((post) => (
          <li key={post.projectId}>
            ProjectId:{post.projectId}, LastUpdated:{post.lastUpdated}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NasaProjects;
