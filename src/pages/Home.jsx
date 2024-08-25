// Home.js

import HeroSection from '../components/home/HeroSection';
import ProjectIntroduction from '../components/home/ProjectIntroduction';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
  return (
    <div >
      <HeroSection />
      {/* <div style={{backgroundColor: '#013220'}}> */}
      <ProjectIntroduction />
      <CallToAction />
      {/* </div> */}
     
    </div>
  );
};

export default Home;
