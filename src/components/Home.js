import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import WorkHistory from './Page';
import Skills from './Skills';
import Projects from './Projects';
import Achievements from './Achievements';
import Education from './Education';
import Personal from './Personal';
import Charter from './Chart';
// import { NavLink,Link} from 'react-router-dom';
import {Button, Nav, NavDropdown, Navbar, NavLink, Link} from 'react-bootstrap';

class Home extends Component{
    constructor(props){
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            name: "Aravind",
            role: "app-developer",
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render(){
        return(
            <div style={{marginTop: 20, backgroundColor: 'var(--background-color)', 
                                        color: 'var(--text-color)'}}>
                <div style={{position: 'sticky',top: '0px', zIndex: 1000}}>   
                <h2 style={{border: '1px solid black', textAlign: 'center', backgroundColor: 'white', marginBottom: 0}}>
                  Raja Pandy's Profile
                 </h2>
                 <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Overview</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                              <Nav.Link href="#workhistory">Work history</Nav.Link>
                              <Nav.Link href="#skills">Skills</Nav.Link>
                    <NavDropdown title="Summary" id="basic-nav-dropdown">
        
        <NavDropdown.Item href="#projects">Projects</NavDropdown.Item>
        <NavDropdown.Item href="#achievements">Achievements</NavDropdown.Item>
        <NavDropdown.Item href="#education">Education</NavDropdown.Item>
        <NavDropdown.Item href="#personal">Personal Details and Hobbies</NavDropdown.Item>
      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
</div>
     <h5 style={{marginTop: 5}}>Professional Summary</h5>
     <div style={{padding: 10}}>
     Hardworking, enthusiastic and results-oriented Mechanical
Engineer offering robust qualifications in Engineering, Quality
Control, Continuous Process Improvements across project life
cycle and in Supply Chain. Motivated to learn, grow and excel
in the given field of work. Recognized for inspiring
management team members to excel and encouraging
creative work environments.
     </div>
     <WorkHistory />
     <Skills />
     <Projects />
     <Achievements />
     <Education />
     <Charter />
     <Personal />
         </div>
        );
    }
}

export default Home;