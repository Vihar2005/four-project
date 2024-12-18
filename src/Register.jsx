import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './FirebaseAuth';
import './App.css'
import './Register.css'

const Register = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/login")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
    }
    return (
        <main >
            <section className='bordersign'>
                <div>
                    <h1 className='h1'> Sign Up </h1>
                    <form className='labelcss'>
                        <div>
                            <label htmlFor="email-address" className='space'>
                                Email
                            </label>
                            <input
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className='spacelabel'>Password</label>
                            <input
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required placeholder="Password"
                            />
                        </div>
                        <button type="submit" onClick={onSubmit} className='btncss btn btn-primary'> Sign up </button>
                    </form>
                    <p className='fontsize'>
                        Already have an account?{' '}
                        <NavLink to="/login" > Sign in </NavLink>
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Register