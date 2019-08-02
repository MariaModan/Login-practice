import React from 'react';

const Register = () => {
    return(
        <div>
            <form>
                <fieldset>
                    <legend>Register</legend>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </fieldset>
            </form>
        </div>
    );
}

export default Register;