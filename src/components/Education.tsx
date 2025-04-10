
import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

interface EducationItemProps {
  degree: string;
  institution: string;
  duration: string;
  icon: React.ReactNode;
}

const EducationItem = ({ degree, institution, duration, icon }: EducationItemProps) => {
  return (
    <div className="flex items-start mb-6">
      <div className="mr-4 bg-portfolio-navy p-2 rounded-full text-white">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{degree}</h3>
        <p className="text-gray-600">{institution}</p>
        <p className="text-sm text-gray-500">{duration}</p>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <section className="py-12">
      <div className="portfolio-container">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-portfolio-navy">Education</h3>
            <EducationItem 
              degree="M.Com"
              institution="Mumbai University"
              duration="2022 – 2024"
              icon={<GraduationCap size={20} />}
            />
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-portfolio-navy">Certifications</h3>
            <EducationItem 
              degree="Diploma in Advanced Digital Marketing"
              institution="Operating Media"
              duration="2023"
              icon={<Award size={20} />}
            />
            <EducationItem 
              degree="Google Ads Certification"
              institution="Google"
              duration="2023"
              icon={<Award size={20} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
