import React, { Component } from 'react';
import { loginUser } from "./../../store/actions/loginAction";
import { connect } from 'react-redux';
import Header from './../../components/Header';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
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
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(data);
        console.log('data');
        this.props.loginUser(data);
        
    }
    render() {
        return (
            <>
                <Header />
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label >Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email1"
                            //aria-describedby="emailHelp" 
                            placeholder="Enter email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginState: state
    }
}
const mapDispatchToProps = (dispatch) => ({
    loginUser: (userData) => dispatch(loginUser(userData))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);