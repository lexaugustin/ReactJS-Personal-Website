import React, { Component } from 'react';

import SectionHead from './SectionHead/SectionHead';
import Subsection from  './Subsection/Subsection';

import Banner from './Banner/Banner';
import NavBar from './NavBar/NavBar';
import NavbarMobile from './NavbarMobile/NavbarMobile'
import About from './About/About';
import LatestProjects from './LatestProjects/LatestProjects';
import MoreProjectsCard from './MoreProjectsCard/MoreProjectsCard';
import Interests from './Interests/Interests';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import './App.css';

class App extends Component {

  // state = {
  //   showNavbarMobile: false
  // };

  // navbarButtonClickHandler = () => {
  //   this.setState((prevState) => {
  //     return {
  //       showNavbarMobile: !prevState.showNavbarMobile
  //     };
  //   });
  // }

  // closeButtonClickHandler = () => {
  //   this.setState({showNavbarMobile: false})
  // }

  render() {

    // let mobileMenu;

    // if(this.state.showNavbarMobile){
    //   mobileMenu = <NavbarMobile close={this.closeButtonClickHandler}/>
    // }

    return (
      <div style={{height: '100%'}}>
        
        <NavBar />
        {/* {mobileMenu} */}
        <Banner/>

        <section id="about-me">
          <div className="section-content">
            <SectionHead
              icon = "img/icons/person.svg" 
              title = "About Me" 
              subtitle = "A little bit about myself, including my interests and favorite things to do." 
            />
            <About></About>
          </div>
        </section>

        <section id="latest-projects">
          <div className="section-content">
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

            <LatestProjects
              icon="far fa-id-card"
              name = "Folio (Tentaive Name)"
              title = "Professional Portfolio and Job Site"
              description = "Folio is a tentative name to a project that I am working on with my partner, Alexander Nuñez, as our
                            senior project. It will be a portfolio web application where students and professionals can showcase 
                            their employment history, projects and achievements. It will also contains a job search features that
                            help students find jobs based on their skills."
              image = "img/projects/today/today-screen.png"
            />
          </div>
        </section>

        <section id="more-projects">
          <div className="section-content">
            <SectionHead
              icon = "img/icons/Programming.svg"
              title = "More Notable Projects"
              subtitle = "Some of the most notable projects that I have worked on"
            />
            {/* <Subsection
              left = "Web Dev"
              right = "Mobile Dev"
            /> */}

            <div id='more-projects-cards'>
              <div className='card'>
                <MoreProjectsCard
                  img = "img/projects/night-owls/1.png"
                  title = "Night Owls"
                  description = "Night Owls is web application that makes finding study spots easier on campus. The application allows students to see where the study spots are,
                  how many spots they have and how many of them are occupied."
                />
              </div>

              <div className='card'>
                <MoreProjectsCard
                  img = "img/projects/task-list/1.png"
                  title = "Task List"
                  description = "Task List is a simple to-do list web application. The application allows users to add new tasks to the list, 
                  with the ability to line-crossed or delete completed tasks using AJAX calls to the API."
                />
              </div>

              <div className='card'>
                <MoreProjectsCard
                  img = "https://i.imgur.com/5JeXjEu.png"
                  title = "Trivia Box"
                  description = "Trivia Box is a trivia app that I started working on as I was learning iOS development with Swift. 
                  It started as a gaming trivia app, and I, later, started working on a new version that has categories like geography, 
                  history and science. I was using the app to practice what I Have learned in mobile development. I have started working 
                  on the app using Flutter since I am learning flutter now, and it will make it easier for me to publish it to both platform."
                />
              </div>
            </div>
          </div>
        </section>

        <section id='skills-interests'>
          <div className="section-content">
            <SectionHead
              icon = "img/icons/skills.svg"
              title="Skills and Interests" 
              subtitle="My areas of interests and acquired skills"
            />

            {/* <Subsection
              left = "Interests"
              right = "Skills"
            /> */}

          {/* <div id= 'section-buttons'>
              <button onClick={this.switchSkillsHandler} className='active' id='left'>LEFT</button>
              <button id='right'>RIGHT</button> 
          </div> */}

            {/* <div id="skills-experiences">
              <div id = "skills">
                <Skills title = "Programming Languages">
                  <p>Java, Swift, C, C++, JavaScript/jQuery, HTML/CSS</p>
                </Skills>

                <Skills title = "Libraries, Frameworks and others">
                  <p>Bootstrap, Express.js, NodeJS, ReactJS, AngularJS, MongoDB, 
                  MySQL, Agile Development, Git and RESTful service</p>
                </Skills>

                <Skills title = "Relevant Courses">
                  <p>Data Structures and Algorithms, Discrete Mathematics, Software Engineering, Web Applications, 
                  Computer Organization, Operating Systems, UX Design, Digital Logic and Computer Systems, 
                  Microprocessors Applications, Circuits 1</p>
                </Skills>
              </div>

              <div id = "experiences">
                <Skills title = "MSOFT">
                  <ul>
                    <li>"Developed a program where the location of the user in game and the locations of monsters are utilized to determine."</li>
                    <li>"Developed a program where the location of the user in game and the locations of monsters are utilized to determine."</li>
                  </ul>
                </Skills>

                <Skills title = "GLOW">
                  <ul>
                    <li>"Developed a program where the location of the user in game and the locations of monsters are utilized to determine."</li>
                    <li>"Developed a program where the location of the user in game and the locations of monsters are utilized to determine."</li>
                  </ul>
                </Skills>

                <Skills title = "BOOK">
                  <ul>
                    <li>"Developed a program where the location of the user in game and the locations of monsters are utilized to determine."</li>
                    <li>"Developed a program where the location of the user in game and the locations of monsters are utilized to determine."</li>
                  </ul>
                </Skills>
              </div>
            </div> */}

            <div id = "interests">
              <Interests
                img = "img/icons/software-engineering.svg"
                title = "Software Development"
                text = "I have a big interest in anything software related, especially web and mobile development. I have extensive experience in web technologies"
                skills = "Java, JavaScript/jQuery, Swift, C, C++, HTML/CSS, Bootstrap, Express.js, NodeJS, ReactJS, AngularJS, MongoDB, MySQL, Agile Development, Git and RESTful service"
              />

              <Interests
                img = "img/icons/ui-ux.svg"
                title = "UI/UX Design"
                text = "I, sometimes, put half of the time that I spend working on a project in trying to make it look the best possible."
                skills = "Sketch, AdobeXD"
              />

              <Interests
                img = "img/icons/machine-learning.svg"
                title = "Machine Learning"
                text = "Machine learning is the last are of computer science that has caught my attention after attending some workshops and watching some crash courses on it. I will be taking a machine learning class my next and last semester."
              />
            </div>
          </div>
        </section>





        <section id='contact'>
          <div className="section-content">
            <SectionHead
              icon = "img/icons/letter.svg"
              title = "Contact"
              subtitle="I can be contacted anytime via this form or through the information conatines in my resume"
            />
            
            <Contact></Contact>
          </div>
        </section>

        <footer id='footer'>
          <Footer></Footer>
        </footer>
        
      </div>
    );
  }
}

export default App;
