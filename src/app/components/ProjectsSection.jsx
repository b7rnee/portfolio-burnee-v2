"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 2,
    title: "Nozify Web",
    description: "Nozify is a powerful and secure platform that allows you to receive personalized notifications for all your needs.",
    image: "/images/projects/nozify.png",
    tag: ["All", "Web"],
    gitUrl:  "https://app.nozify.mn",
    previewUrl: "https://app.nozify.mn"
  },
  {
    id: 3,
    title: "Amarnom",
    description: "The users are also able to download and read previously purchased content from our app. The contents we offer are in the Mongolian language and targeted to Mongolian readers or people who speak the Mongolian language.",
    image: "/images/projects/amarnom.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://apps.apple.com/mn/app/amarnom/id1615494669",
    previewUrl: "https://apps.apple.com/mn/app/amarnom/id1615494669",
  },
  {
    id: 4,
    title: "Internom",
    description: "The web offers a preview of book content we sell through our physical store and e-commerce website.",
    image: "/images/projects/internom.png",
    tag: ["All", "Web"],
    gitUrl: "https://internom.mn",
    previewUrl: "https://internom.mn",
  },
  {
    id: 5,
    title: "Suragch",
    description: "Authentication and CRUD operations",
    image: "/images/projects/suragch.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Nozify App",
    description: "With Nozify, you can stay informed and up-to-date without having to worry about sifting through irrelevant information. Our app is designed with your privacy in mind - we don't sell your data to third parties, and we don't show you any ads.",
    image: "/images/projects/nozifyapp.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://www.nozify.com",
    previewUrl: "https://www.nozify.com",
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
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
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
