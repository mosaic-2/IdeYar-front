import React from "react";
interface ProjectCardProps {
    id: string | number;
    title: string;
    description: string;
    imageUrl?: string;
    amountPaid: number;
    amountGoal: number;
    userName: string;
}
declare const ProjectCard: React.FC<ProjectCardProps>;
export default ProjectCard;
