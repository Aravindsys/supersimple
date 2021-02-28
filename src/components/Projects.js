import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
class Projects extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="projects">
                 <hr style={{marginBottom: 100}}/>
                <h5>Projects</h5>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center',
                   flexShrink: 0, flexWrap: 'wrap'}}> 
                   <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Re-Engineering in Automatic Beam Welding Machine(ABMW)</Card.Title>
                        <Card.Text>This Project helped to eliminate the reworks that arose in the ABWM and improve the quality of the components and by reducing the cost of the product and manufacturing time by using various Quality Tools and Concepts
                        </Card.Text>
                       
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Pneumatics Auto feed Multi Operational Bending Machine Using Internet Of Things </Card.Title>
                        
                        <Card.Text>This project is used to perform bending operation with the help of pneumatic sources and Internet of Things (IoT)
                        </Card.Text>
                       
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Arduino Line Following Robot Car</Card.Title>
                        
                        <Card.Text>
                        This is an Intelligent device which can automatically sense the tape or paint stripes and follow the tapes to move the direction
                        </Card.Text>
                       
                    </Card.Body>
                </Card>

                   </div>
            </div>
        );
    }
}

export default Projects;