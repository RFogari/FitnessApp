import React, { Component } from "react";
import API from "../../Utils/API";
//import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Jumbotron from "../../Components/Jumbotron";
import Container from "../../Components/Container";


class Dataform extends Component {
    state = {
        activity: '',
        time: '',
        date: '',
        notes: ''
    };

   

    componentDidMount() {
        const idtoken = localStorage.getItem('id_token')
        console.log(idtoken);
    }

   


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if(this.state.activity && 
            this.state.time &&
            this.state.date) {
                API.saveData({
                    tokenID: this.state.tokenID,
                    activity: this.state.activity,
                    time: this.state.times,
                    date: this.state.date,
                    notes: this.state.notes
                })

                .then(res => this.loadData())
                .then(err => console.log(err));
            }
    };


    render() {
        return(
            <Container fluid>
                <row>
                    <Jumbotron>
                        <h1>Enter New Fitness Records</h1>
                    </Jumbotron>
                </row>
                <form>
                    <label>
                        Select Your Activity:
                        <select
                            name="activity"
                            value={this.state.activity}
                            onChange={this.handleInputChange}>
                            <option value="Walking">Walking</option>
                            <option value="Lifting">Lifting</option>
                            <option value="Swimming">Swimming</option>
                            <option value="Hiking">Hiking</option>
                            <option value="Running">Running</option>
                            <option value="Cycling">Cycling</option>
                            <option value="Rowing">Rowing</option>
                        </select>
                    </label>
                    
                    <label>
                        Time Spent Active? (reqired
                        <select
                            name="time"
                            value={this.state.time}
                            onChange={this.handleInputChange}>

                        <option value="15">15 Minutes</option>
                        <option value="30">30 Minutes</option>
                        <option value="45">45 Minutes</option>
                        <option value="60">1 Hour</option>
                        <option value="90">90 Minutes</option>
                        <option value="120">2 Hours</option>    
                        </select> 
                    </label>
                    <label>
                        Select Date                       
                        <DatePicker
                            name="date"
                            selected={this.state.date}
                            onChange={this.handleInputChange}
                            withPortal
                        />
                    </label> 

                    <label>
                        Notes:

                        <textarea
                            name="notes"
                            value={this.state.notes}
                            onChange={this.handleInputChange}
                         />
                        
                    </label>           

                    <button
                        disabled={!(
                            this.state.activity
                            && this.state.time
                            && this.state.date
                        )}
                        onclick={this.handleFormSubmit}
                        >Submit New Data</button>

                </form>            
            </Container>
        )
    }
}

export default Dataform;