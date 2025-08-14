
import React from 'react';
import { Calendar } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

const ExperienceItem = ({ title, company, duration, responsibilities }: ExperienceItemProps) => {
  return (
    <div className="card mb-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
        <div>
          <h3 className="text-xl font-bold text-portfolio-navy">{title}</h3>
          <h4 className="text-lg font-semibold text-portfolio-lightNavy">{company}</h4>
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          <Calendar size={16} className="mr-2 text-portfolio-accent" />
          <span className="text-sm font-medium text-gray-600">{duration}</span>
        </div>
      </div>
      <ul className="list-disc pl-5 space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index} className="text-gray-700">{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Digital Marketing Executive",
      company: "Delta Yards",
      duration: "Oct 2023 – Present",
      responsibilities: [
        "Generated qualified leads through paid campaigns on Facebook Ads and Google Ads, ensuring effective targeting and optimization.",

"Tracked campaign performance using Google Tag Manager (GTM) and UTM parameters for accurate analytics.",

"Managed end-to-end campaigns, from ad creation to performance tracking in Google Analytics.",

"Handled social media accounts, developed engaging content, and maintained consistent brand presence.",

"Designed ad creatives and social media visuals using Canva.",

"Applied basic SEO practices, including on-page and off-page optimization, to improve website visibility.",

"Consistently achieved a 3x ROI on monthly campaigns through strategic planning and optimization."
      ]
    },
    {
      title: "Digital Marketing Intern",
      company: "R5 Design Hub",
      duration: "Jun 2023 – Oct 2023",
      responsibilities: [
        "Managed and grew social media accounts for multiple clients across different industries.",
        "Planned and executed brand awareness campaigns on Facebook and LinkedIn to increase visibility and engagement.",
        "Developed monthly social media strategies and content plans aligned with client objectives."
        
      ]
    }
  ];

  return (
    <section className="py-12">
      <div className="portfolio-container">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              duration={exp.duration}
              responsibilities={exp.responsibilities}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
