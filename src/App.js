import React from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarsCanvas from './canvas/stars';
import ComputersCanvas from './canvas/computer';


//const colors = ["teal", "blue", "grey"];

// const getColorForHour = (hour) => {
//   const index = hour % colors.length;
//   return colors[index];
// };


function App() {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  // edit this variable to change the color theme
  // const [color, setColor] = useState(getColorForHour(new Date().getHours()));

  // useEffect(() => {
  //   const updateColor = () => {
  //     setColor(getColorForHour(new Date().getHours()));
  //   };

  //   // Update the color every hour
  //   const intervalId = setInterval(updateColor, 3600000);

  //   // Cleanup interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, []);
  const color = "teal";

  return (
    <>
      
       <StarsCanvas />
      <div className="foreground">
        <Nav color={color} />
        {/* <div className="header-container relative">
          <video
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 w-full h-full object-cover opacity-50 -z-10"
          >
            <source src="/assets/skills-bg.webm" type="video/webm" />
            <source src="/assets/skills-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}
        <div className="header-container relative">
          <div className="absolute inset-0 z-[-1] flex items-center justify-center">
            <ComputersCanvas />
          </div>
          <Header color={color} />
        </div>
        <About color={color} />
        <Experience color={color} />
        <Education color={color} />
        <Projects color={color} />
        <Contact color={color} />
        <Footer />
      </div>
    </>
  );
}

export default App;
