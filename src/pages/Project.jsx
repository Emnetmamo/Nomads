/* src/components/ProjectJourney.jsx */


import '../assets/css/ProjectJourney.css';
import { FaRegCheckCircle } from 'react-icons/fa';
import img1 from '../assets/images/initial.png';
import img2 from '../assets/images/research.png';
import img3 from '../assets/images/launch.png';
import img4 from '../assets/images/test.png';
import img5 from '../assets/images/cloud.png';
import img6 from '../assets/images/feedback.png';
// Import other images for each milestone

const ProjectJourney = () => {
  return (
    <section className="project-journey">
      <div className="container">
        <h2>Our Project Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="progress-image">
              <img src={img1} alt="progress" />
            </div>
            <div className="card">
              <div className="card-header">
                <FaRegCheckCircle className="icon" />
                <h3>Project Initiation</h3>
              </div>
              <div className="card-body">
                <p>Started the project with initial brainstorming sessions and problem identification.</p>
                <button className="check-btn">Check our Journey</button>
              </div>
            </div>
          </div>

          <div className="timeline-item" style={{marginLeft: "400px"}}>
            <div className="card">
              <div className="card-header">
                <FaRegCheckCircle className="icon" />
                <h3>Research and Planning</h3>
              </div>
              <div className="card-body">
                <p>Conducted in-depth research on existing taxi systems and planned the project requirements.</p>
                <button className="check-btn">Check our Journey</button>
              </div>
            </div>
            <div className="progress-image" style={{marginLeft: "30px"}}>
              <img src={img2} alt="progress" />
            </div>
          </div>

         
          <div className="timeline-item">
            <div className="progress-image">
              <img src={img3} alt="progress" />
            </div>
            <div className="card">
            <div className="card-header">
              <FaRegCheckCircle className="icon" />
              <h3>Development Kickoff</h3>
            </div>
            <div className="card-body">
              <p>Started the development phase, implementing key features and functionalities.</p>
              <button className="check-btn">Check our Journey</button>
            </div>
          </div>

          </div>


          <div className="timeline-item" style={{marginLeft: "400px"}}>
          <div className="card">
            <div className="card-header">
              <FaRegCheckCircle className="icon" />
              <h3>Testing and Iterations</h3>
            </div>
            <div className="card-body">
              <p>Thoroughly tested the system, identified issues, and iterated for improvements.</p>
              <button className="check-btn">Check our Journey</button>
            </div>
          </div>
            <div className="progress-image" style={{marginLeft: "30px"}}>
              <img src={img4} alt="progress" />
            </div>
          </div>

          <div className="timeline-item">
          <div className="progress-image">
              <img src={img5} alt="progress" />
            </div>
            <div className="card">
            <div className="card-header">
              <FaRegCheckCircle className="icon" />
              <h3>Deployment</h3>
            </div>
            <div className="card-body">
              <p>Successfully deployed the digital platform for use in the taxi management system.</p>
              <button className="check-btn">Check our Journey</button>
            </div>
          </div>
           
          </div>

          <div className="timeline-item" style={{marginLeft: "400px"}}>
          <div className="card">
            <div className="card-header">
              <FaRegCheckCircle className="icon" />
              <h3>Ongoing Enhancements</h3>
            </div>
            <div className="card-body">
              <p>Continuing to enhance the system based on user feedback and changing requirements.</p>
              <button className="check-btn">Check our Journey</button>
            </div>
          </div>
            <div className="progress-image" style={{marginLeft: "30px"}}>
              <img src={img6} alt="progress" />
            </div>
          </div>




        </div>
      </div>
    </section>
  );
};

export default ProjectJourney;







