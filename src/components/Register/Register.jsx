import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from "sweetalert2";


const Register = () => {

   
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const from = location.state?.from?.pathname || '/'

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        setSuccess('');
        setError('');

        if (password.length < 6) {

            setError(' Your password is less than 6 characters. Please add at least 6 characters in your password !')
            return;
        }
        else if (password !== confirm) {
            setError('Your password did not match')
            return
        }

        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                event.target.reset();
                Swal.fire({
                    title: 'Success!',
                    text: 'Your account has been created successfully',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    
                  });
                  navigate(from, { replace: true })
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-body">

                    <h1 className='text-center text-4xl mt-2 font-bold text-[#1cb3fe]'>Register</h1>   

                        <form onSubmit={handleRegister} className="card-body">
                            <div className=''>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                                </div>
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
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" name='confirm' placeholder="Confirm Password" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                                    <label className="label">
                                        <p> Already Have an Account? <Link to="/login" className=' link  text-[#1cb3fe]  text-xl'>Login</Link></p>
                                    </label>
                                </div>
                                <p className='text-red-600 '>{error}</p>
                                
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#57c3f9] border-none text-white hover:bg-[#3ddbff]">Register</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;