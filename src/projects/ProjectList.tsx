import React from 'react';
import { Project } from './Project';

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="row">
      {
        projects.map((project) => (
          <div key={project.id} className="cols-sm">
            <div className="card">
              <img src={project.imageUrl} alt={project.name} />
              <section className="section dark">
                <h4 className="strong">
                  <strong>{project.name}</strong>
                </h4>
                <p>{project.description}</p>
                <p>Budget : {project.budget.toLocaleString()}</p>
              </section>
            </div>
          </div>
        ))
      }
    </div >
  );
}

export default ProjectList;