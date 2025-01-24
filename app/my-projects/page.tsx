"use client";
import React from "react";
import Image from "next/image";

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  demoLink, 
  githubLink 
}: { 
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
}) => (
  <div className="bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
    <div className="relative h-48 w-full">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
            Live Demo →
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
            GitHub →
          </a>
        )}
      </div>
    </div>
  </div>
);

const Page = () => {
  const projects = [
    {
      title: "Personal Blog",
      description: "A clean and modern personal journey showcase with timeline layout. Features dark mode, responsive design. Built with Next.js and React.",
      image: "/project1.jpg",
      technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      demoLink: "https://blog-tau-black-55.vercel.app/about",
    },
    {
      title: "Remote Work Platform",
      description: "A platform connecting digital nomads with remote opportunities. Features job posting, application management, and community building.",
      image: "/project2.jpg",
      technologies: ["Next.js", "Chakra UI", "Redux", "TypeScript"],
      demoLink: "https://www.rwnomad.com/work",
    },
    {
        title: "Regional Plan Platform",
        description: "An interactive planning platform for Greater Adelaide Region through to 2051. Features dynamic mapping visualization, regional planning strategies, and comprehensive environmental data integration with ArcGIS.",
        image: "/project3.jpg",
        technologies: ["Vite", "Material UI", "KendoUI", "Mapbox GL", "React", "AWS"],
        demoLink: "https://regional.plan.sa.gov.au/",
    }
  ];

  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="min-h-screen w-screen bg-cover bg-center py-20 px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-semibold text-white text-[50px] mb-4">
            Featured
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Projects
            </span>
          </h1>
          <p className="text-gray-400 text-xl">
            Showcasing some of my representative works
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page; 