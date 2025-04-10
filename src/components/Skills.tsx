
import React from 'react';

interface SkillItemProps {
  name: string;
  icon: string;
}

const SkillItem = ({ name, icon }: SkillItemProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-portfolio-softGray p-4 rounded-full mb-2">
        <img src={icon} alt={name} className="w-8 h-8" />
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { name: "Facebook Ads", icon: "https://via.placeholder.com/48/0A2647/FFFFFF?text=FB" },
    { name: "Google Ads", icon: "https://via.placeholder.com/48/0A2647/FFFFFF?text=GA" },
    { name: "Canva", icon: "https://via.placeholder.com/48/0A2647/FFFFFF?text=CV" },
    { name: "Google Analytics", icon: "https://via.placeholder.com/48/0A2647/FFFFFF?text=GA" },
    { name: "SEO Basics", icon: "https://via.placeholder.com/48/0A2647/FFFFFF?text=SEO" },
    { name: "A/B Testing", icon: "https://via.placeholder.com/48/0A2647/FFFFFF?text=AB" }
  ];

  return (
    <section className="py-12 bg-portfolio-softGray">
      <div className="portfolio-container">
        <h2 className="section-title">Skills & Tools</h2>
        
        <div className="card">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <SkillItem key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
