
import React from 'react';
import { Facebook, MessageSquare, PenTool, BarChart3, Search, SplitSquareVertical } from 'lucide-react';

interface SkillItemProps {
  name: string;
  icon: React.ReactNode;
  bgColor?: string;
}

const SkillItem = ({ name, icon, bgColor = "bg-portfolio-navy/10" }: SkillItemProps) => {
  return (
    <div className="flex flex-col items-center group">
      <div className={`${bgColor} p-4 rounded-full mb-3 group-hover:scale-110 transition-all duration-300 shadow-md`}>
        <div className="w-10 h-10 flex items-center justify-center text-portfolio-navy">
          {icon}
        </div>
      </div>
      <span className="text-sm font-medium text-center">{name}</span>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { 
      name: "Facebook Ads", 
      icon: <Facebook className="w-6 h-6" />,
      bgColor: "bg-blue-100"
    },
    { 
      name: "Google Ads", 
      icon: <MessageSquare className="w-6 h-6" />,
      bgColor: "bg-red-100" 
    },
    { 
      name: "Canva", 
      icon: <PenTool className="w-6 h-6" />,
      bgColor: "bg-purple-100"
    },
    { 
      name: "Google Analytics", 
      icon: <BarChart3 className="w-6 h-6" />,
      bgColor: "bg-yellow-100"
    },
    { 
      name: "SEO Basics", 
      icon: <Search className="w-6 h-6" />,
      bgColor: "bg-green-100"
    },
    { 
      name: "A/B Testing", 
      icon: <SplitSquareVertical className="w-6 h-6" />,
      bgColor: "bg-indigo-100"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="portfolio-container">
        <h2 className="section-title mb-12">Skills & Tools</h2>
        
        <div className="card bg-white rounded-xl shadow-lg border border-gray-100">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <SkillItem key={index} name={skill.name} icon={skill.icon} bgColor={skill.bgColor} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
