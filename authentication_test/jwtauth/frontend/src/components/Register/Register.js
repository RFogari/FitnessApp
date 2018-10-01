//registration component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../actions/authentication';
import classnames from 'classnames';

class Register extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
            errors: {}
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }

        //console.log(user);
        this.props.registerUser(user, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }


    render() {
        const { errors } = this.state;
        return(
            <div className="container">
                <h2>Registration</h2>

                <form onSubmit={ this.handleSubmit }>
                
                    <div className="form-group">
                        <input 
                            type="text" 
                            placeholder="Name"
                            className='form-control form-control-lg'
                            name="name"
                            onChange={ this.handleInputChange }
                            value={ this.state.name }
                        /> 

                        
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            className='form-control form-control-lg'
                            name="email"
                            onChange={ this.handleInputChange }
                            value={ this.state.email }
                        />     
                            
                    </div>


                    <div className="form-group">
                        <input 
                            type="password"
                            placeholder="Password"
                            className='form-control form-control-lg'
                            name="password"
                            onChange={ this.handleInputChange }
                            value={ this.state.password }
                        />

                           
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className='form-control form-control-lg'
                            name="password_confirm"
                            onChange={ this.handleInputChange }
                            value={ this.state.password_confirm }
                        />

                         
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Register user
                        </button>    

                    </div>

                </form>
            </div>
        )

    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{ registerUser })(withRouter(Register))