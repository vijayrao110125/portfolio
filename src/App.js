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
        <Header color={color} />
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
