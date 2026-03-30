import React from "react"
import ProjectCard from "@/components/ProjectCard";

import FilmVault from '@/assets/FilmVault.png';
import Checkers from '@/assets/Checkers.png';
import Tindog from '@/assets/Tindog.png';

const Projects = () => {
    const projects = [
        {
            title: 'Film-Vault',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eaque non magnam eum provident, veritatis quod accusamus corrupti fuga, ratione quaerat modi facilis neque saepe. Corrupti repudiandae quaerat accusamus nulla.'
        },

        {
            title: 'Checkers',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laboriosam voluptatibus ad sed at maiores placeat molestiae autem, natus itaque suscipit fuga iste, expedita velit reiciendis libero perferendis molestias illo.'
        },

        {
            title: 'Tindog',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum omnis ipsam libero harum quidem vero est id rerum fuga? Libero voluptatem ex veniam! Officiis provident quod, quisquam placeat dolorem natus!'
        }
    ];

    return (
        <div className="wrapper pt-25 lg:pt-42.5">
            <section id="my-projects" className="px-10 lg:px-35 min-h-screen not-lg:pt-15">
                <h2>My <span className="text-purple">Projects</span></h2>

                <div className="project-wrapper">
                    <ProjectCard image={FilmVault} projects={projects[0]} />
                    <ProjectCard image={Checkers} projects={projects[1]} />
                    <ProjectCard image={Tindog} projects={projects[2]} />
                </div>
            </section>
        </div>
    )
};

export default Projects;
