
import React from 'react';
import { TrendingUp, DollarSign, Users, Award } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const MetricCard = ({ title, value, icon }: MetricCardProps) => {
  return (
    <div className="card flex items-center">
      <div className="mr-4 bg-portfolio-navy p-3 rounded-full text-white">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-portfolio-navy">{value}</p>
      </div>
    </div>
  );
};

const Metrics = () => {
  return (
    <section className="py-12">
      <div className="portfolio-container">
        <h2 className="section-title">Performance Metrics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard 
            title="Average CTR" 
            value="4.5%" 
            icon={<TrendingUp size={24} />} 
          />
          <MetricCard 
            title="Cost Per Lead" 
            value="₹70" 
            icon={<DollarSign size={24} />} 
          />
          <MetricCard 
            title="Total Leads Generated" 
            value="5,000+" 
            icon={<Users size={24} />} 
          />
          <MetricCard 
            title="Campaign Success" 
            value="92%" 
            icon={<Award size={24} />} 
          />
        </div>

        <div className="card bg-portfolio-accent bg-opacity-10 border border-portfolio-accent">
          <h3 className="text-lg font-bold mb-2 text-portfolio-accent">Campaign Highlight</h3>
          <p className="text-gray-700">
            <strong>Diwali Campaign</strong> – Generated 800+ qualified leads in just 10 days with a 32% lower cost-per-lead than campaign benchmark.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
