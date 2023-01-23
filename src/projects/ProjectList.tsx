import React from "react";
import { Project } from './Project';
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
    projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
    return (
        <div className="row">
            {projects.map((project) => (
                <ProjectCard project={project} key={project.id} />
                ))}
            </div>
    );
}
export default ProjectList;