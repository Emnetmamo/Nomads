// src/components/CallToAction.jsx
import '../../assets/css/CallToAction.css';
import img from "../../assets/images/gallery/Two_girls-removebg-preview.png"

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="cta-container">
        <div className="cta-image">
          {/* Add your image here */}
          <img src={img} alt="Call to Action Image" />
        </div>
        <div className="cta-content">
          <h2 className="cta-title">Ready to Explore Our Project?</h2>
          <p className="cta-description">
            Join us in our journey and explore the innovative features and advancements we have made!
          </p>
          <button className="explore-button">Explore</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
