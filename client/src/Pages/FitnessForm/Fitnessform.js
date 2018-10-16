import React, { Component } from "react";
import API from "../../Utils/API";
import {Form, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';

import Jumbotron from "../../Components/Jumbotron";
import Container from "../../Components/Container";



class Fitnessform extends Component {

    state = {
        activity: "",
        time: "",
        date: '',
        notes: "",
        //profile: "",

    }


    componentDidMount() {
        //this.setState({ profile: {} });
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
      }




    onChange = date => this.setState({ date })


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        this.handleChange = this.handleInputChange.bind(this);
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.activity
                && this.state.time
                &&this.state.date) {
                    API.saveData({

                        tokenID: localStorage.getItem('user'),
                        activity: this.state.activity,
                        time: this.state.time,
                        date: this.state.date,
                        notes: this.state.notes,


                    })

                .then(err => console.log(err));
            }
    };


    render() {

        

        return(
           <div>
            <Container>
                <row>
                    <Jumbotron>
                        <h1>Enter New Fitness Records</h1>
                    </Jumbotron>
                </row>
                <Form onSubmit={this.handleFormSubmit}>
                <FormGroup>
                    <row>
                    
                    <ControlLabel>
                        Select Your Workout
                        </ControlLabel>
                        <FormControl
                            value={this.state.activity}
                            onChange={this.handleInputChange}
                            name="activity"
                            componentClass="select"
                            >
                            <option value="Walking">Walking</option>
                            <option value="Lifting">Lifting</option>
                            <option value="Swimming">Swimming</option>
                            <option value="Hiking">Hiking</option>
                            <option value="Running">Running</option>
                            <option value="Cycling">Cycling</option>
                            <option value="Rowing">Rowing</option>

                        </FormControl>
                    
                    </row>
                    <row>
                    <ControlLabel>
                        Select Workout Duration
                        </ControlLabel>
                        <FormControl
                            name="time"
                            value={this.state.time}
                            onChange={this.handleInputChange}
                            componentClass="select">

                        <option value="15 Minutes">15 Minutes</option>
                        <option value="30 Minutes">30 Minutes</option>
                        <option value="45 Minutes">45 Minutes</option>
                        <option value="1 Hour">1 Hour</option>
                        <option value="90 Minutes">90 Minutes</option>
                        <option value="2 Hours">2 Hours</option>
                        </FormControl>
                    
                    </row>
                    <row>
                        <ControlLabel>
                            Enter Workout Date

                        </ControlLabel>
                        <FormControl
                      
                            type="text"
                            name="date"
                            placeholder="MM/DD/YYYY"
                            value={this.state.date}
                            onChange={this.handleInputChange}
                            >
                            
                      
                        </FormControl>


                    </row>
                    <row>
                    <ControlLabel>
                        Select How You Currently Feel
                    </ControlLabel>  

                      <FormControl
                            name="notes"
                            value={this.state.notes}
                            onChange={this.handleInputChange}
                            componentClass="select">

                        <option value="Great">Great</option>
                        <option value="Good">Good</option>
                        <option value="Okay">Okay</option>
                        <option value="Not So Good">Not So Good</option>
                        <option value="Awful">Awful</option>
                        <option value="My Legs Are Broken">My Legs Are Broken</option>
                        </FormControl>

                    
                    </row>
                     
                    <row>
                    
                        <Button bsStyle="success"
                            disabled={!(
                                this.state.activity
                                && this.state.time
                                && this.state.date
                            )}
                            onClick={this.handleFormSubmit}
                            >Submit A New Record New Data</Button>
                     
                    </row>
                  </FormGroup> 
                </Form>
            </Container>
        </div>
        )
    }
}

export default Fitnessform;