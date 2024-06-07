import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth'
import { useAuth } from '../context/authContext'
import '../styles/pages/login.css'

const Login = () => {
    const { userLoggedIn } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
            // doSendEmailVerification()
        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            doSignInWithGoogle().catch(err => {
                setIsSigningIn(false)
            })
        }
    }

    return (
        <div>
            {userLoggedIn && (<Navigate to={'/'} replace={true} />)}

            <main className="login-container">
                <div className="login-box">
                    <div className="login-header">
                        <div className="login-title-container">
                            <h3 className="login-title">Welcome Back</h3>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} className="login-form">
                        <div className="login-input-container">
                            <label className="login-label">Email</label>
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                className="login-input"
                            />
                        </div>

                        <div className="login-input-container">
                            <label className="login-label">Password</label>
                            <input
                                type="password"
                                autoComplete='current-password'
                                required
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                className="login-input"
                            />
                        </div>

                        {errorMessage && (
                            <span className="login-error">{errorMessage}</span>
                        )}

                        <button
                            type="submit"
                            disabled={isSigningIn}
                            className="login-button"
                        >
                            {isSigningIn ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>
                    <p className="login-footer">
                        Don't have an account? <Link to={'/register'} className="login-link">Sign up</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}

export default Login
