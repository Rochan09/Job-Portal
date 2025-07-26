import React from "react";
import { FaSearch, FaUsers, FaChartLine } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Smart Job Matching",
      description: "Our AI-powered system matches you with jobs that fit your skills and preferences",
      icon: <FaSearch />,
      color: "#3B82F6"
    },
    {
      id: 2,
      title: "Top Employers",
      description: "Connect with leading companies and startups looking for talented professionals",
      icon: <FaUsers />,
      color: "#10B981"
    },
    {
      id: 3,
      title: "Career Growth",
      description: "Access resources and opportunities to advance your career to the next level",
      icon: <FaChartLine />,
      color: "#8B5CF6"
    }
  ];

  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="header">
          <h2>Why Choose JobPortal?</h2>
          <p>We make job searching and hiring easier for everyone</p>
        </div>
        
        <div className="features">
          {features.map((feature) => (
            <div className="feature-card" key={feature.id}>
              <div className="icon-wrapper" style={{ backgroundColor: feature.color }}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs; 