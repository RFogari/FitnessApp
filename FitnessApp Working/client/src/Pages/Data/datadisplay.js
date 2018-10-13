import React, { Component } from "react";
import API from "../../Utils/API";
import { Link } from "react-router-dom";
import { ListItem, List } from "../../Components/List";

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
                    <jumbotron>
                    <h1>Fitness Records</h1>
                    </jumbotron>
                    {this.state.records.length ? (
                    <List>
                        {this.state.records.map(record => (
                            <ListItem key={record.__id}>
                            <Link to={"/records/" + record.tokenID}>
                                <strong>
                                    {record.date}
                                    {record.activity}
                                    
                                    
                                </strong>
                            
                            </Link>
                            </ListItem>
                        ))}
                    </List>
                    )
                        
                    
                         : (
                    <h3>No Results to Display</h3>
                    )}
                </div>
            </container>
        )    
    }


}

export default Records;