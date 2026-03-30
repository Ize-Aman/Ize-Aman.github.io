import React, { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);
    useEffect(() => {
        const handlePointerDown = (event) => {
            const target = event.target;
            if (!(target instanceof Element)) return;

            const clickedProjectBox = target.closest(".project-box");
            if (!clickedProjectBox) {
                setActiveProject(null);
            }
        };

        document.addEventListener("pointerdown", handlePointerDown);
        return () => document.removeEventListener("pointerdown", handlePointerDown);
    }, []);

    const projects = [
        {
            image: "./FilmVault.png",
            title: "Film-Vault",
            description:
                "A React movie discovery app that integrates the TMDB API to browse trending films, search titles, and view detailed movie information, with Firebase supporting backend functionality and a responsive user interface.",
            github: "https://github.com/Ize-Aman/Film-Vault",
            deployment: "https://movie-app-self-nu.vercel.app/"
        },

        {
            image: "./Checkers.png",
            title: "Checkers",
            description:
                "A classic checkers game built in C++ using the Raylib graphics library, featuring interactive piece movement, rule-based gameplay mechanics, and a simple graphical interface designed to recreate the traditional board game experience.",
            github: "https://github.com/Ize-Aman/Checkers",
            deployment: ""
        },

        {
            image: "./Tindog.png",
            title: "Tindog",
            description:
                "This project was built for learning purposes while following a web development course. It helped me understand how Bootstrap simplifies responsive design and speeds up front-end development.",
            github: "https://github.com/Ize-Aman/Tindog",
            deployment: "https://ize-aman.github.io/Tindog/"
        },
    ];

    return (
        <div className="wrapper pt-25 lg:pt-42.5">
            <section
                id="my-projects"
                className="px-10 lg:px-35 min-h-screen not-lg:pt-15"
            >
                <h2>
                    My <span className="text-purple">Projects</span>
                </h2>

                <div className="project-wrapper">
                    <ProjectCard
                        projects={projects[0]}
                        isActive={activeProject === 0}
                        onActivate={() => setActiveProject(0)}
                    />
                    <ProjectCard
                        projects={projects[1]}
                        isActive={activeProject === 1}
                        onActivate={() => setActiveProject(1)}
                    />
                    <ProjectCard
                        projects={projects[2]}
                        isActive={activeProject === 2}
                        onActivate={() => setActiveProject(2)}
                    />
                </div>
            </section>
        </div>
    );
};

export default Projects;
