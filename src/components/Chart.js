import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap';

import {Bar} from 'react-chartjs-2';

const state = {
    labels: ['B.E(Mech)', 'Higher Secondary', 'High School'],       
    datasets: [
      {
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [82.20, 89.00, 91.00]
      }
    ]
  }

class Charter extends Component{
    constructor(props){
        super(props);
    }
    

    render(){
        return(
            <div>  
        <div className="alignChart">
        <Bar
          data={state}
          options={{
              scales: {
                  yAxes: [{
                      ticks:{
                          min: 50,
                          max: 100
                      }
                  }]
              },
            responsive: true,
            maintainAspectRatio: false,
            title:{
              display:true,
              text:'Percentage Of Marks',
              fontSize:20
            },
            legend:{
              display: false,
              position:'top',
              
            }
          }}
        />
      </div>
      </div>
        );
    }
}

export default Charter;