import React from 'react';
import './Sign-Up.scss';
import { connect } from 'react-redux';
import FormInput from '../Form-Input/Form-Input';
import CustomButton from '../Custom-Button/Custom-Button';
import { signUpStart } from '../../Redux/User/User.Action';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Password and ConfirmPassword Don't Match!!!");
            return;
        }

        signUpStart({ displayName, email, password });
    };

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-up">
                <h2>I don't have an account.</h2>
                <span>Sign up with your email or password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        handleChange={this.handleChange}
                        type="text"
                        label="Display Name"
                        value={this.state.displayName}
                        required
                    />
                    <FormInput
                        name="email"
                        handleChange={this.handleChange}
                        type="email"
                        label="Email"
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        name="password"
                        handleChange={this.handleChange}
                        type="password"
                        label="Password"
                        value={this.state.password}
                        required
                    />
                    <FormInput
                        name="confirmPassword"
                        handleChange={this.handleChange}
                        type="password"
                        label="Confirm Password"
                        value={this.state.confirmPassword}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="Submit">Sign Up</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
