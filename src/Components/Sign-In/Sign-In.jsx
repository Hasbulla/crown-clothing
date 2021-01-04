import React from "react";
import './Sign-In.scss';
import FormInput from "../Form-Input/Form-Input";
import CustomButton from "../Custom-Button/Custom-Button";
import { signInWithGoogle } from "../../Firebase/Firebase.utils";

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: ''});
    };

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    };

    render() {
        return(
            <div className = "sign-in">
                <h2>I already have an account.</h2>
                <span>Sign in with your email or password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" handleChange={this.handleChange} type="email" label="Email" value={this.state.email} required />
                    <FormInput name="password" handleChange={this.handleChange} type="password" label="Password" value={this.state.password} required />
                    <div className="buttons">
                        <CustomButton type="Submit">Sign In</CustomButton>
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>

                </form>
            </div>
        );
    }
}

export default SignIn;