// src/components/ProjectIntroduction.jsx
import { useState, useEffect } from 'react';
import Scrollspy from 'react-scrollspy';
import { useSpring, animated } from 'react-spring';
import '../../assets/css/ProjectIntroduction.css';

const ProjectIntroduction = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const props = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(-20px)',
    config: { duration: 1500 },
  });

  const projectCards = [
    { title: 'RFID Attendance Tracking', description: 'Implement RFID-based attendance tracking for taxi drivers.', icon: '📇' },
    { title: 'Automated Punishment Processing', description: 'Automate punishment processing for rule violations.', icon: '⚖️' },
    { title: 'Online Payments', description: 'Enable online payments for taxi services.', icon: '💳' },
    { title: 'GPS Integration', description: 'Integrate GPS for real-time monitoring of taxis.', icon: '📍' },
    { title: 'Accountability Enhancement', description: 'Enhance accountability through digital platform access.', icon: '🤝' },
    { title: 'Operational Efficiency', description: 'Improve operational efficiency with a mobile app and website.', icon: '📱' },
  ];
  

  return (
    <section className="project-introduction">
       <p className="section-description">
        Explore the highlights of our innovative projects.
      </p>
      <h2 className="section-title">PROJECT HIGHLIGHTS </h2>
     

      <Scrollspy items={['project-introduction']} currentClassName="active">
        <animated.div key="project-introduction" className={`project-cards ${visible ? 'visible' : ''}`} style={props}>
          {projectCards.map((card, index) => (
            <animated.div key={index} className={`project-card card-${index + 1}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="card-content">
                <div className="card-icon">{card.icon}</div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
            </animated.div>
          ))}
        </animated.div>
      </Scrollspy>
    </section>
  );
};

export default ProjectIntroduction;
