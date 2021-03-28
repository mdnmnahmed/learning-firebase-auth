import React, { useState } from 'react';

const SignupModal = ({ firebase }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUpHandler = async (event) => {
        event.preventDefault();

        await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                console.log('userCredential: ', userCredential);

                const user = userCredential.user;

            })
            .catch((error) => {
                console.log('Error in Signup: ', error);
                var errorCode = error.code;
                var errorMessage = error.message;
            });

    }

    return (
        <>
            <div id="signupModal" class="modal" style={{ width: '30%' }}>
                <div style={{ padding: '0px' }} align="right">
                    <a href="#" class="modal-close waves-effect waves-yellow btn-flat"><i class="material-icons">close</i></a>
                </div>
                <div class="modal-content" style={{ paddingTop: '0px' }}>
                    <div align="center" >
                        <h4>SignUp</h4>
                    </div>
                    <form class="col s12" onSubmit={signUpHandler}>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="email" type="email" class="validate"
                                    name="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="password" type="password" class="validate"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <div align="right">
                            <button type="submit" class="waves-effect waves-light btn">Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
}

export default SignupModal;
