import React, { useState } from 'react';
import './Sign-In.scss';
import { connect } from 'react-redux';
import FormInput from '../Form-Input/Form-Input';
import CustomButton from '../Custom-Button/Custom-Button';
import {
    googleSignInStart,
    emailSignInStart
} from '../../Redux/User/User.Action';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        emailSignInStart(email, password);
    };

    const handleChange = (event) => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <div className="sign-in">
            <h2>I already have an account.</h2>
            <span>Sign in with your email or password</span>

            <form onSubmit={handleSubmit}>
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
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton
                        type="button"
                        onClick={googleSignInStart}
                        isGoogleSignIn
                    >
                        Sign In With Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
