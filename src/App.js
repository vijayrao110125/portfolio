import React,{ useState, useEffect } from 'react';
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
import Avatar from './canvas/avatar';


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
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleMediaChange = (event) => {
      setIsDesktop(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);



  const color = "teal";

  return (
    <>
      
       <StarsCanvas />
      <div className="foreground">
        <Nav color={color} />
        {isDesktop && (
          <div className="avatar-container">
            <Avatar />
          </div>
        )}
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
