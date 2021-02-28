import React, { Component } from 'react';
import {ListGroup, Table} from 'react-bootstrap';

class Personal extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="personal" style={{padding: 10}}>
            <hr style={{marginBottom: 100}}/>
                <h5>Personal Details and Hobbies</h5>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center',
                   flexShrink: 0, flexWrap: 'wrap'}}>
                   <Table striped bordered hover size="sm">
  
  <tbody>
    <tr>
      <td>Name</td>
      <td>Rajapandian. N</td>
     
    </tr>
    <tr>
      <td>Father's Name</td>
      <td>Natarajan. K</td>
    </tr>
    <tr>
      <td>D.O.B</td>
      <td>29/08/1998</td>
    </tr>
    <tr>
      <td>Blood Group</td>
      <td>B+ve</td>
    </tr>
    <tr>
      <td>Marital Status</td>
      <td>Single</td>
    </tr>
    <tr>
      <td>Religion</td>
      <td>Hindu</td>
    </tr>
    <tr>
      <td>Languages Known</td>
      <td>Tamizh, English, and German</td>
    </tr>
    <tr>
      <td>Hobbies</td>
      <td>•	Playing Badminton
•	Listening to Music
•	Travelling
</td>
    </tr>
  </tbody>
</Table>
                   </div>
                   </div>
        );
    }
}

export default Personal;