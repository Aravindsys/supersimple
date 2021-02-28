import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import Chart from 'chart.js';

class Education extends Component{
    constructor(props){
        super(props);

    }

 

    render(){
        return(
    <div id="education">
            <hr style={{marginBottom: 100}}/>
           <h5>Education</h5>
           <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center',
              flexShrink: 0, flexWrap: 'wrap'}}> 
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>B.E. Mechanical Engineering </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Sri Venkateswara College             of Engineering
Sriperumbudur, Tamil Nadu 
</Card.Subtitle>
                        <Card.Text>
                        •	CGPA : 8.22 (out of 10)
April 2016 - 2020
                        </Card.Text>
                        <Card.Link href="https://www.svce.ac.in/">Visit Institution Website</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>High School</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Velammal Matriculation Higher Secondary School
T S Krishna Nagar, Chennai

</Card.Subtitle>
                        <Card.Text>
                        •	Secured 89% - April 2016
                        </Card.Text>
                        <Card.Link href="http://www.velammal.org/">Visit Institution Website</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>High School</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">SBOA Matriculation Higher Secondary School
Anna Nagar, Chennai

</Card.Subtitle>
                        <Card.Text>
                        •	Secured 91% - April 2014
                        </Card.Text>
                        <Card.Link href="http://www.sboajc.org/">Visit Institution Website</Card.Link>
                    </Card.Body>
                </Card>
              </div>

</div>
        );
    }

}

export default Education;