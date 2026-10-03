import React, { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "../../types";

interface Props {
  project: Project;
  onSelectProject: (project: Project) => void;
}

const ProjectCard: React.FC<Props> = ({ project, onSelectProject }) => {
  const [hovered, setHovered] = useState(false);
  const thumb = project.thumbnail;

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelectProject(project)}
      className="relative w-full h-full overflow-hidden cursor-pointer group bg-[#111412]"
    >
      {/* Background Image */}
      {thumb ? (
        <img
          src={thumb}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="font-display font-bold text-[#F1EDE3]/20 text-sm">{project.title}</span>
        </div>
      )}

      {/* Hover Overlay */}
      <div
        className="absolute inset-0 bg-[#080B09]/70 backdrop-blur-[2px] flex flex-col items-center justify-center transition-opacity duration-300 p-6 text-center"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        <div
          className="w-14 h-14 rounded-full bg-[#F1EDE3] text-[#080B09] flex items-center justify-center shadow-lg mb-4 transform transition-transform duration-500 delay-75"
          style={{ transform: hovered ? "translateY(0)" : "translateY(10px)" }}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current ml-1">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        
        <h3
          className="font-display font-extrabold text-2xl text-[#F1EDE3] mb-1 transform transition-transform duration-500 delay-100 uppercase"
          style={{ transform: hovered ? "translateY(0)" : "translateY(10px)" }}
        >
          {project.title}
        </h3>
        
        <p
          className="text-[#D8D1C2] text-xs font-display tracking-widest uppercase transform transition-transform duration-500 delay-150"
          style={{ transform: hovered ? "translateY(0)" : "translateY(10px)" }}
        >
          {project.category?.name || "Film"}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
