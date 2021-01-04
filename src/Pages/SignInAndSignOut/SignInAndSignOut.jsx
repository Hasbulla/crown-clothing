import React from "react";
import "./SignInAndSignOut.scss";
import SignIn from "../../Components/Sign-In/Sign-In";
import SignUp from "../../Components/Sign-Up/Sign-Up";

const SignInAndSignOut = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignOut;