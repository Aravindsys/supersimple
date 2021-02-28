import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap';
class Skills extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
          <div id="skills">
            <hr style={{marginBottom: 100}}/>
                <h5>Skills</h5>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center',
                   flexShrink: 0, flexWrap: 'wrap'}}>  
                     <ListGroup>
                         <ListGroup.Item>•	Technical knowledge</ListGroup.Item>
                         <ListGroup.Item>•	Supply Chain Management</ListGroup.Item>
                         <ListGroup.Item>•	Quality Control</ListGroup.Item>
                         <ListGroup.Item>•	Operation Research</ListGroup.Item>
                         <ListGroup.Item>•	Lean Six Sigma Yellow Belt Certification</ListGroup.Item>
                         <ListGroup.Item>•	Lean Six Sigma Green Belt Certification</ListGroup.Item>
                         <ListGroup.Item>•	Additive Manufacturing</ListGroup.Item>
                         <ListGroup.Item>•	Tally ERP 9.0</ListGroup.Item>
                         <ListGroup.Item>•	Microsoft Excel</ListGroup.Item>
                         <ListGroup.Item>•	Creo</ListGroup.Item>
                         <ListGroup.Item>•	Strong time management</ListGroup.Item>
                         <ListGroup.Item>•	Employees collaboration</ListGroup.Item>
                         <ListGroup.Item>•	Leadership</ListGroup.Item>

                     </ListGroup>
              </div>
          </div>
        );
    }
}

export default Skills;