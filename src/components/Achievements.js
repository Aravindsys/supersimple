import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap';

class Achievements extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="achievements" style={{padding: 10}}>
            <hr style={{marginBottom: 100}}/>
                <h5>Achievements</h5>
                <h6>Affiliations</h6> 
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center',
                   flexShrink: 0, flexWrap: 'wrap'}}>  
               
                  <ListGroup>
                         <ListGroup.Item>Steering Head and Procurement Head, Team Traxion Racing, Formula Bharat (2019-2020)</ListGroup.Item>
                         <ListGroup.Item>Class Representative, SVCE (2018–2019)</ListGroup.Item>
                         <ListGroup.Item>Member, Society of Automotive Engineers (SAEINDIA)  (2016–2020)</ListGroup.Item>
                         <ListGroup.Item>Member, Quality Management Cell, SVCE (2016-2020)</ListGroup.Item>
                 </ListGroup>
                   </div>
                   <h6 style={{marginTop: 20}}>Accomplishments</h6>
                   <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center',
                   flexShrink: 0, flexWrap: 'wrap'}}>  
               
                  <ListGroup>
                         <ListGroup.Item>•	Received Best Paper Award for the paper titled "Hazard Identification and Risk Assessment in Roller Mill – Case Study" at the International Conference on Latest Trends in Engineering and Management (ICLTEM-19), Pondicherry.</ListGroup.Item>
                         <ListGroup.Item>•	Cleared Tier 1 in Welding and Turning and won First Prize in Welding Competition conducted by Society of Automotive Engineers SAE in 2018</ListGroup.Item>
                         <ListGroup.Item>•	Participated in FORMULA BHARAT 2019 event held at Kari Motor Speedway, Coimbatore</ListGroup.Item>
                         <ListGroup.Item>•	Conducted “MR MECHANICAL” Event in the National Level Technical Symposium Ignition 2018 at Sri Venkateswara College of Engineering</ListGroup.Item>
                 </ListGroup>
                   </div>
                   <h6 style={{marginTop: 20}}>Publications</h6>
                   <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center',
                   flexShrink: 0, flexWrap: 'wrap'}}>  
               
                  <ListGroup>
                         <ListGroup.Item>•	Published a paper on "Investigation on Mechanical Performance of 3D printed Carbon and Glass Fiber reinforced polylactic acid laminates", Materials Today : Proceedings, ISSN : 2214-7853, March 2020</ListGroup.Item>
                         <ListGroup.Item>•	Published a paper on "Hazard Identification and Risk Assessment in Roller Mill – Case Study", Think India Journal, ISSN : 0971-1260, Vol 22, Issue 10, November 2019, Pg No: 95-106</ListGroup.Item>
                         <ListGroup.Item>•	Published a paper on "Review of Materials and Methods for 3D Printing/Additive Manufacturing", International Journal of Management, Technology and Engineering, ISSN : 2249-7455, March 2020, Vol 9, Issue 4, April 2019, Pg No: 4708-4716</ListGroup.Item>
                
                 </ListGroup>
                   </div>
            </div>
        );
    }
}


export default Achievements;