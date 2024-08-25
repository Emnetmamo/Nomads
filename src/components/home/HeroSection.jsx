// src/components/HeroSection.jsx

import '../../assets/css/HeroSection.css';
import videoSource from '../../Videos/code.mp4';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="video-container">
        <video  autoPlay muted loop>
          <source src={videoSource} type="video/mp4" />
        </video>
      </div>
      <div className="hero-content">
        <h1 style={{marginLeft: "120px", fontSize: "70px", fontWeight:"bolder", marginBottom:"50px"}}></h1>
        <h1 className="hero-title"> Embark on a digital journey with us, where innovation meets purpose, and every milestone takes us closer to a smarter future. </h1>
      </div>
    </section>
  );
};

export default HeroSection;
