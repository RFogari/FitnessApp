import React, { Component } from "react";
import API from "../../Utils/API";

import {ListGroupItem, ListGroup, Jumbotron} from 'react-bootstrap';


class Records extends Component {

    state = {
        records: {},
        actity: "",
        time: "",
        date: "",
        notes: ""
    }

    componentDidMount() {
       
            this.setState({ profile: {} });
            const { userProfile, getProfile } = this.props.auth;
            if (!userProfile) {
              getProfile((err, profile) => {
                this.setState({ profile });
              });
            } else {
              this.setState({ profile: userProfile });
              console.log(userProfile.sub);
              localStorage.setItem("user", userProfile.sub);
              
            }
            this.loadRecords();
          }
   

    loadRecords = () => {

        const id = localStorage.getItem('user');
        
            
         
        API.getData(id)
    
           .then(res => {
            console.log(id);
            this.setState({ records: res.data })
            console.log(res.data);
        })
            .catch(err => console.log(err));
           

    }

    

    render() {

        
        //const tokenid = localStorage.getItem('id_token');

        return(


            <container>

                <div>
                    <Jumbotron className="dataDisplay">
                    <h1>Fitness Activity</h1>
                    </Jumbotron>

                    <div className="dataDisplayContainer">
                    {this.state.records.length ? (
                   
                   <div className="dataRecord">
                     
                        {this.state.records.map(record => (
                            <ListGroupItem id="itemRecord" key={record.__id}>
                                <ListGroup >

                                    <ListGroupItem header="Date">
                                    {record.date}
                                    </ListGroupItem>
                                    <ListGroupItem header="Workout">
                                        {record.activity}
                                    </ListGroupItem>

                                    <ListGroupItem header="Workout Duration">
                                        {record.time}
                                    </ListGroupItem>

                                    <ListGroupItem header="Notes">
                                        {record.notes}
                                    </ListGroupItem>
                                    </ListGroup>
                                                           
                                
                            
                            
                            
                            </ListGroupItem>
                                
                        ))}
                   
                    </div>
                    )
                        
                    
                         : (
                    <h3>No Results to Display</h3>
                    )}
                </div>

                <div>
                    
               
                    
                </div>
                </div>

            </container>
        )    
    }


}

export default Records;