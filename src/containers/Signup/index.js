import React, { Component } from 'react';
import { signup } from './../../store/actions/signupAction'
import { connect } from 'react-redux';
import Header from './../../components/Header';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        if(localStorage.getItem('token')){
            this.props.history.push('/home');
        }
    }
    handleChange = (event) => {
        console.log(event.target);
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let data = new FormData(event.target);    
        console.log(data);
        console.log("data");
        this.props.signup(data);
    }
    render() {
        console.log(this.props);
        return (
            <>
                <Header />
                <form id="signupform" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="Name">First Name</label>
                        <input type="text" className="form-control" id="first_name" name="first_name" placeholder="John" onChange={this.handleChange} />
                        </div>
                    <div className="form-group">
                        <label htmlFor="Name">Last Name</label>
                        <input type="text" className="form-control" id="last_name" name="last_name" placeholder="John" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email">Email Address</label>
                        <input type="text" className="form-control" id="Email" name="email" placeholder="john@example.com" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input type="password" className="form-control" id="Password" name="password" placeholder="john@123" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="re-password">Confirm Password</label>
                        <input type="password" className="form-control" id="confirm_password" name="confirm_password" placeholder="Confirm Password" onChange={this.handleChange} />
                    </div>
                    <div className="form-group form-button">
                        <button id="submit" type="submit" className="btn-effect one">Sign Up</button>
                    </div>
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signupState: state.signupReducer
    }
}
const mapDispatchToProps = (dispatch) => ({
    signup: (userData) => dispatch(signup(userData))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);