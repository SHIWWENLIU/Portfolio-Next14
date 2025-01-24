"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/app/contants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const SkillCard = ({ title, description, icon }: { title: string, description: string, icon: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.02 }}
    className="bg-[#0A0A20]/40 p-8 rounded-2xl backdrop-blur-sm border border-[#ffffff1a] hover:border-purple-500/50 transition-all"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-xl bg-[#ffffff1a] flex items-center justify-center p-2">
        <Image 
          src={icon} 
          alt={title} 
          width={40} 
          height={40} 
          className="object-contain"
        />
      </div>
      <h3 className="text-2xl text-white font-semibold">{title}</h3>
    </div>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const SkillSection = ({ title, skills }: { title: string, skills: any[] }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="mb-16"
  >
    <h2 className="text-3xl text-white font-bold mb-8 pl-2 border-l-4 border-purple-500">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
  </motion.div>
);

const Page = () => {
  const frontendSkills = [
    { 
      title: "React", 
      description: "Built multiple web apps with React hooks", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
    },
    { 
      title: "TypeScript", 
      description: "Daily use of TypeScript in projects", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
    },
    { 
      title: "Next.js", 
      description: "Created high-performance websites with Next.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" 
    },
  ];

  const backendSkills = [
    { 
      title: "Node.js", 
      description: "Built RESTful APIs and real-time applications", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
    },
    { 
      title: "Java", 
      description: "Enterprise application development with Spring Boot", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
    },
    { 
      title: "C#", 
      description: ".NET Core development and microservices", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" 
    },
  ];

  const toolsSkills = [
    { 
      title: "Git", 
      description: "Version control and team collaboration", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
    },
    { 
      title: "Docker", 
      description: "Container deployment and management", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
    },
    { 
      title: "AWS", 
      description: "Lambda, Amplify, S3, DynamoDB, API Gateway ", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" 
    },
  ];

  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="min-h-screen w-screen bg-cover bg-center py-20 px-8 bg-fixed"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-bold text-white text-5xl mb-6"
          >
            Professional Skills
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}& Expertise
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            4+ years of hands-on experience in full-stack development, 
            continuously expanding knowledge in modern web technologies.
          </motion.p>
        </div>

        <SkillSection title="Frontend Development" skills={frontendSkills} />
        <SkillSection title="Backend Development" skills={backendSkills} />
        <SkillSection title="Development Tools" skills={toolsSkills} />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-20 bg-[#0A0A20]/40 p-10 rounded-2xl backdrop-blur-sm border border-[#ffffff1a]"
        >
          <h2 className="text-2xl text-white font-bold mb-8 text-center">Technology Stack Overview</h2>
          <Swiper
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={5000}
            modules={[Autoplay]}
            className="max-w-[90%] mx-auto"
          >
            {SkillData.map((skill, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center p-4 hover:scale-110 transition-transform">
                  <div className="w-16 h-16 bg-[#ffffff1a] rounded-xl flex items-center justify-center p-3">
                    <Image
                      src={skill.Image}
                      alt={skill.name}
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page;
