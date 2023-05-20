import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';



const Login = () => {



    const { signInWithGoogle, signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'

    // email sign in

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    // google sign in

    const handleGoogleSignIn = () => {
        signInWithGoogle().then(() => {
            console.log('User signed in with Google');
            navigate(from, { replace: true })
        }).catch(error => {
            console.log('Error signing in with Google:', error);
        });
    }


    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse ">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-body ">
                        <div className='card-body'>

                            <h1 className='text-center text-5xl font-bold text-[#1cb3fe]'>Log in</h1>
                           

                            <form onSubmit={handleLogin} className="" >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                    <label className="label">
                                        <p> Don't Have an Account? <Link to="/register" className='link text-[#1cb3fe]  text-lg'>Register</Link></p>

                                    </label>
                                </div>
                                <p className='text-red-400 '>{error}</p>
                                <div className="form-control mt-6">
                                    <button className=" btn bg-[#57c3f9] border-none text-white hover:bg-[#3ddbff]">Login</button>
                                </div>

                            </form>
                        </div>
                        <div className="form-control  ">
                            <div className="divider">OR</div>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info text-xl font-semibold text-black ">Google</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;