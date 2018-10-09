import React, { Component } from "react";
import API from "../../Utils/API";
//import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Jumbotron from "../../Components/Jumbotron";
import Container from "../../Components/Container";
//import moment from 'moment';


class Dataform extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleInputChange = this.handleInputChange.bind(this);
        
    }
    

   

    componentDidMount() {
        const idtoken = localStorage.getItem('id_token')
        console.log(idtoken);
    }



handleSelect(date) {
    this.setState({
        startDate: date
    });
}

    handleChange(date) {
        this.setState({
            startDate:date
        });
    }
   


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
                        tokenID: this.state.tokenID,
                        activity: this.state.activity,
                        time: this.state.time,
                        date: this.state.date,
                        notes: this.state.notes,

                        
                    })
                        .then(alert("form submitted"))
                      

                //.then(res => this.loadData())
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
                <form onSubmit={this.handleFormSubmit}>
                    <row>
                    <label>
                        Select Your Activity:
                        <select
                            value={this.state.activity}
                            onChange={this.handleInputChange}
                            //name="activity"
                            >
                            <option value="Walking">Walking</option>
                            <option value="Lifting">Lifting</option>
                            <option value="Swimming">Swimming</option>
                            <option value="Hiking">Hiking</option>
                            <option value="Running">Running</option>
                            <option value="Cycling">Cycling</option>
                            <option value="Rowing">Rowing</option>
                            
                        </select>
                    </label>
                    </row>
                    <row>
                    <label>
                        Time Spent Active? (reqired)
                        <select
                            //name="time"
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
                    </row>
                    <row>
                    <label>
                        Select Date                       
                        <DatePicker 
                            //name="date"
                            onSelect={this.state.handleSelect}
                            onChange={this.handleChange}
                            withPortal
                            
                        />
                        
                    </label> 
                    </row>
                    <row>
                    <label>
                        Notes:

                        <textarea
                            //name="notes"
                            value={this.state.notes}
                            onChange={this.handleInputChange}
                         />
                        
                    </label>           
                    </row>
                    <row>
                    <button
                        disabled={!(
                            this.state.activity
                            && this.state.time
                            && this.state.date
                        )}
                        onClick={this.handleFormSubmit}
                        >Submit New Data</button>
                    </row>
                </form>            
            </Container>
        )
    }
}

export default Dataform;