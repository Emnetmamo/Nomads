// src/components/AboutUs.jsx

import '../assets/css/AboutUs.css';
import me from '../assets/images/gallery/fu3.jpg';
import lidu from '../assets/images/gallery/lidu.png';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-container">
        <div className="team-members">
          <div className="team-member">
            <div className="member-card">
              <div className="member-image">
                <img src={me} alt="Emnet Mamo" />
              </div>
              <div className="member-details">
                <h3> Emnet Mamo</h3> 
                <p>Bachelors of Electrical and Computer Engineering</p>
                <p>Network Enginner</p>
                <p>Full stack developer / Mobile App developer</p>
                <p>Embedded Systems Engineer / IoT Developer </p>
              </div>
            </div>
          </div>
          <div className="about-content">
            <h2>About Us</h2>
            <p>
            Welcome to Nomads, a dynamic and innovative company founded by two passionate siblings dedicated to bringing your digital dreams to life. We are a duo of tech enthusiasts with a vision to create cutting-edge websites, mobile apps, and hardware solutions that not only meet but exceed expectations.

At Nomads, we believe in the power of creativity, collaboration, and technology. Our journey began with a shared love for technology and a desire to explore new frontiers. Together, we combine our expertise in software development, design, and hardware engineering to deliver comprehensive solutions tailored to your unique needs.

Whether you are looking for a sleek and functional website, a powerful mobile application, or innovative hardware projects, we are here to make it happen. We are committed to turning ideas into reality, always pushing the boundaries of what is possible.

Join us on our journey as we continue to innovate, create, and explore the ever-evolving world of technology. At Nomads, your vision is our mission.


            </p>
          </div>
          <div className="team-member">
            <div className="member-card">
              <div className="member-image">
                <img src={lidu} alt="Nahome Biniyam" />
              </div>
              <div className="member-details">
                <h3>Lidiya Mamo</h3>
                <p> 4th year Software Engineering student at AAiT</p>
                <p> 2024 Huawei North African tech4good champion</p>
                <p>Full stack developer / Mobile App developer</p>
                <p> UI/UX designer / Graphics Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
