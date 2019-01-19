import React, { Component } from 'react';

import SectionHead from './SectionHead/SectionHead';
import Subsection from  './Subsection/Subsection';

import Banner from './Banner/Banner';
import NavBar from './NavBar/NavBar';
import About from './About/About';
import LatestProjects from './LatestProjects/LatestProjects';
import MoreProjectsCard from './MoreProjectsCard/MoreProjectsCard';
import Interests from './Interests/Interests';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <NavBar></NavBar>
        <Banner></Banner>

        <section id="about-me">
          <SectionHead
            icon = "img/icons/person.svg" 
            title = "About Me" 
            subtitle = "A little bit about myself, including my interests and favorite things to do." 
          />
          <About></About>
        </section>

        <section id="latest-projects">
          <SectionHead 
            icon = "img/icons/project.svg"
            title = "Latest Projects"
            subtitle = "Some of the projects that I have been working on lately ouside of classes"
          />

          <LatestProjects
            icon="far fa-sun"
            name = "Today"
            title = "Weather from your location and Calendar"
            description = "A simple weather app with a calendar. It shows the weather of the current location and
                          the current day is highlited with the circle. The background color changes to light green, 
                          orange and bleu based on the time of the day. I worked on this app after learning how to use 
                          api in iOS development with Swift and the Cocoapods libraries. The weather source is OpenWeatherMap."
            image = "img/projects/today/today-screen.png"
          />

          {/* <LatestProjects
            icon="far fa-id-card"
            name = "Folio (Tentaive Name)"
            title = "Professional Portfolio and Job Site"
            description = "Enthusiastic Computer Engineering student at the University of Florida with interests 
                          in web technologies,mobile development, machine learning and a passion for anything 
                          technology related. During my free time I like to read tech articles, watch tech videos 
                          on YouTube, play video games, or I often use those times to acquire more knowledge in 
                          hardware design and software development."
            image = "img/projects/today/today-screen.png"
          /> */}
        </section>

        <section id="more-projects">
          <SectionHead
            icon = "img/icons/Programming.svg"
            title = "More Notable Projects"
            subtitle = "Some of the most important projects that I have worked on"
          />
          <Subsection
            left = "Web Dev"
            right = "Mobile Dev"
          />

          <div id='more-projects-cards'>
            <div className='card'><MoreProjectsCard></MoreProjectsCard></div>
            <div className='card'><MoreProjectsCard></MoreProjectsCard></div>
            <div className='card'><MoreProjectsCard></MoreProjectsCard></div>
          </div>
        </section>

        <section id='skills-interests'>
          <SectionHead
            icon = "img/icons/skills.svg"
            title="Skills and Interests" 
            subtitle=""
          />

          <Subsection
            left = "Interests"
            right = "Skills"
          />

          {/* <div id="skills-experiences">
            <div id = "skills">
              <Skills
                title = "Programming Languages"
                text = "Java, Swift, C, C++, JavaScript/jQuery, HTML/CSS"
              />
              <Skills
                title = "Libraries, Frameworks and others"
                text = "Bootstrap, Express.js, NodeJS, ReactJS, AngularJS, MongoDB, 
                MySQL, Agile Development, Git and RESTful service"
              />
              <Skills
                title = "Relevant Courses"
                text = "Data Structures and Algorithms, Discrete Mathematics, Software Engineering, Web Applications, 
                Computer Organization, Operating Systems, UX Design, Digital Logic and Computer Systems, 
                Microprocessors Applications, Circuits 1"
              />
            </div>
            <div id = "experiences">
              <Skills
                title = "Programming Languages"
                text = "Java, Swift, C, C++, JavaScript/jQuery, HTML/CSS"
              />
              <Skills
                title = "Programming Languages"
                text = "Java, Swift, C, C++, JavaScript/jQuery, HTML/CSS"
              />

              <Skills
                title = "Programming Languages"
                text = "Java, Swift, C, C++, JavaScript/jQuery, HTML/CSS"
              />
            </div>
          </div> */}

          <div id = "interests">
            <Interests
              img = "img/icons/machine-learning.svg"
              title = "Web and Mobile Development"
              text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id semper nibh. Nulla lacinia ipsum felis, ut viverra erat pharetra sed. Duis venenatis augue id felis aliquam tempor."
            />

            <Interests
              img = "img/icons/machine-learning.svg"
              title = "UX Engineering"
              text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id semper nibh. Nulla lacinia ipsum felis, ut viverra erat pharetra sed. Duis venenatis augue id felis aliquam tempor."
            />

            <Interests
              img = "img/icons/machine-learning.svg"
              title = "Machine Learning"
              text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id semper nibh. Nulla lacinia ipsum felis, ut viverra erat pharetra sed. Duis venenatis augue id felis aliquam tempor."
            />
          </div>
          
        </section>





        <section id='contact'>
          <SectionHead
            icon = "img/icons/letter.svg"
            title = "Contact"
          />
          
          <Contact></Contact>
        </section>

        <section id='footer'>
          <Footer></Footer>
        </section>
        
      </div>
    );
  }
}

export default App;
