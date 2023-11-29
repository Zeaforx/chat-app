"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Project 1 description",
        image: "/images/projects/1.png",
        tag: ["All", "Software"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Potography Portfolio Website",
        description: "Project 2 description",
        image: "/images/projects/2.png",
        tag: ["All", "Software"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "E-commerce Application",
        description: "Project 3 description",
        image: "/images/projects/3.png",
        tag: ["All", "Software"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Autonomous Drone",
        description: "Project 4 description",
        image: "/images/projects/auto_drone.jpg",
        tag: ["All", "Robotics"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "Automatic Operated Vehicle",
        description: "Project 5 description",
        image: "/images/projects/5.jpg",
        tag: ["All", "Robotics"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "Robotic Limb",
        description: "Project 6 description",
        image: "/images/projects/6.jpg",
        tag: ["All", "Robotics"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 7,
        title: "Remote Controlled AIrcraft",
        description: "Project 7 description",
        image: "/images/projects/7.jpg",
        tag: ["All", "Engineering"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 8,
        title: "Flight Control System",
        description: "Project 8 description",
        image: "/images/projects/6.jpg",
        tag: ["All", "Engineering"],
        gitUrl: "/",
        previewUrl: "/",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                Our Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Software"
                    isSelected={tag === "Software"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Engineering"
                    isSelected={tag === "Engineering"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Robotics"
                    isSelected={tag === "Robotics"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;
