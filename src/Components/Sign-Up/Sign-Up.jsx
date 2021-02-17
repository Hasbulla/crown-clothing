import React, { useState } from 'react';
import './Sign-Up.scss';
import { connect } from 'react-redux';
import FormInput from '../Form-Input/Form-Input';
import CustomButton from '../Custom-Button/Custom-Button';
import { signUpStart } from '../../Redux/User/User.Action';

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const { displayName, email, password, confirmPassword } = userCredentials;
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Password and ConfirmPassword Don't Match!!!");
            return;
        }

        signUpStart({ displayName, email, password });
    };

    const handleChange = (event) => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <div className="sign-up">
            <h2>I don't have an account.</h2>
            <span>Sign up with your email or password</span>

            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    name="displayName"
                    handleChange={handleChange}
                    type="text"
                    label="Display Name"
                    value={displayName}
                    required
                />
                <FormInput
                    name="email"
                    handleChange={handleChange}
                    type="email"
                    label="Email"
                    value={email}
                    required
                />
                <FormInput
                    name="password"
                    handleChange={handleChange}
                    type="password"
                    label="Password"
                    value={password}
                    required
                />
                <FormInput
                    name="confirmPassword"
                    handleChange={handleChange}
                    type="password"
                    label="Confirm Password"
                    value={confirmPassword}
                    required
                />
                <div className="buttons">
                    <CustomButton type="Submit">Sign Up</CustomButton>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
