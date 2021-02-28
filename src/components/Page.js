import React, { Component } from 'react';
import {Card, ListGroup, NavDropdown} from 'react-bootstrap';

class WorkHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Name from Page',
            role: 'Page Role'
        }
    }
    render() {
        return (
            <div id="workhistory">
                <hr />
                <h5>Work History</h5>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center',
                   flexShrink: 0, flexWrap: 'wrap', fontSize: 10}}>   
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Acid India Limited - Logistics &amp; Warehouse Executive</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Vanagaram, Chennai, Tamil Nadu
December 2020 - Present</Card.Subtitle>
                        <Card.Text>
                            <NavDropdown title="Works Done" id="basic-nav-dropdown"> 
                                <ListGroup>
                             <ListGroup.Item>•	Logistics, Warehousing, Stock auditing and Order Management</ListGroup.Item>
                             <ListGroup.Item>•	Responsible to ensure quality of data input in the ERP System for all order and sales  processing related outputs</ListGroup.Item>
                             <ListGroup.Item>•	To ensure on time delivery of goods to end customers with proper documents and planning cost effective way for freight</ListGroup.Item>
                             <ListGroup.Item>•	Manage inventory for fleet equipment, office and associated paperwork</ListGroup.Item>
                                </ListGroup>
                            </NavDropdown>
                        
                        </Card.Text>
                        <Card.Link href="http://www.acidindia.in/">Visit Company Website</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Annai Enterprises Private Limited - Graduate Engineer Trainee </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Ambattur Industrial Estate, Chennai, Tamil Nadu
       October 2020 - December 2020
</Card.Subtitle>
                        <Card.Text>
                            <NavDropdown title="Works Done" id="basic-nav-dropdown"> 
                                <ListGroup>
                             <ListGroup.Item>•	Working in Final Quality Department (Quality Control) to ensure the dimension of the various automobile components using respective instruments</ListGroup.Item>
                             <ListGroup.Item>•	Find out the reworks that has been arising and the respective reason and solution has to be found out</ListGroup.Item>
                             <ListGroup.Item>•	Entering the daily works in MS office and Spreadsheet</ListGroup.Item>
    
                                </ListGroup>
                            </NavDropdown>
                        
                        </Card.Text>
                        <Card.Link href="https://www.annaienterprises.net/">Visit Company Website</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title> Sundram Fasteners Limited - Neem Trainee </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Padi, Chennai, Tamil Nadu
       September 2020 - October 2020
</Card.Subtitle>
                        <Card.Text>
                            <NavDropdown title="Works Done" id="basic-nav-dropdown"> 
                                <ListGroup>
                             <ListGroup.Item>•	Worked in Final Quality Department - Ensure Dimension, Process stages,  and Finish of various Fasteners that has been manufactured</ListGroup.Item>
                             <ListGroup.Item>•	Complete Delivery Assurance for the respective Fasteners and enter value of those and clear SAP for packing</ListGroup.Item>
                                </ListGroup>
                            </NavDropdown>
                        
                        </Card.Text>
                        <Card.Link href="https://www.sundram.com/">Visit Company Website</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title> Primo Automation Systems Private Limited - Project Intern  </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">     Chennai, Tamil Nadu
     December 2019 – March 2020
</Card.Subtitle>
                        <Card.Text>
                            <NavDropdown title="Works Done" id="basic-nav-dropdown"> 
                                <ListGroup>
                             <ListGroup.Item>•	Done a Project on Re-Engineering and Rework Elimination</ListGroup.Item>
                             <ListGroup.Item>•	 Completed Documentation and Reports for Business Records</ListGroup.Item>
                
                                </ListGroup>
                            </NavDropdown>
                        
                        </Card.Text>
                        <Card.Link href="https://www.primoautomation.com/">Visit Company Website</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Traxion Racing - Member &amp; Head</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Chennai, Tamil Nadu
      February 2018 – July 2019
</Card.Subtitle>
                        <Card.Text>
                            <NavDropdown title="Works Done" id="basic-nav-dropdown"> 
                                <ListGroup>
                             <ListGroup.Item>•	Worked with the Calculation, Designing, Manufacturing, Testing and Racing of a Formula Student Race Car</ListGroup.Item>
                              </ListGroup>
                            </NavDropdown>
                        
                        </Card.Text>
                        <Card.Link href="https://www.facebook.com/traxionracing/">Visit Facebook Group</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Integral Coach Factory - Inplant Trainee </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Chennai, Tamil Nadu
      June 2019
</Card.Subtitle>
                        <Card.Text>
                            <NavDropdown title="Works Done" id="basic-nav-dropdown"> 
                                <ListGroup>
                             <ListGroup.Item>•	Increased understanding of manufacturing of trains,  Locomotive engines, and its parts</ListGroup.Item>
                             <ListGroup.Item>•	Learned new materials, processes involved in it</ListGroup.Item>
                
                                </ListGroup>
                            </NavDropdown>
                        
                        </Card.Text>
                        <Card.Link href="https://icf.indianrailways.gov.in/">Visit Company Website</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Ashok Leyland – Inplant Trainee </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">     Chennai, Tamil Nadu                                                                                                                
      December 2018
</Card.Subtitle>
                        <Card.Text>
                            <NavDropdown title="Works Done" id="basic-nav-dropdown"> 
                                <ListGroup>
                             <ListGroup.Item>•	Maintained high levels of efficiency during training by taking detailed notes and asking questions.</ListGroup.Item>
            
                                </ListGroup>
                            </NavDropdown>
                        
                        </Card.Text>
                        <Card.Link href="https://www.ashokleyland.com/en/web/ashokleyland/home">Visit Company Website</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>  Modular Auto Limited - Inplant Trainee</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Chennai, Tamil Nadu
     June 2017
</Card.Subtitle>
                        <Card.Text>
                            <NavDropdown title="Works Done" id="basic-nav-dropdown"> 
                                <ListGroup>
                             <ListGroup.Item>•	Increased understanding of manufacturing industry processes by assisting with quality assurance tasks</ListGroup.Item>
        
                                </ListGroup>
                            </NavDropdown>
                        
                        </Card.Text>
                        <Card.Link href="https://www.zaubacorp.com/company/MODULAR-AUTO-LIMITED/U25209TN1992PLC023579">Check put this company at Zauba Corp Portal</Card.Link>
                    </Card.Body>
                </Card>
           
                        
                </div>
            </div>
        );
    }
}


export default WorkHistory;