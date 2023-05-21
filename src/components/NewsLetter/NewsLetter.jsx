import React, { useState } from 'react';
import Swal from 'sweetalert2';

const NewsLetter = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        if (email.trim() === '') {
            Swal.fire({
                title: 'Please enter your email!',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        } else {
            console.log(email);
            // Perform other actions with the entered email, such as sending it to a server

            // Reset the email field
            setEmail('');
        }
    };

    const handleChange = event => {
        setEmail(event.target.value);
    };

    return (
        <div>
            <div>
                <div>
                    <div className='flex gap-3 my-6'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                            </svg>
                        </div>
                        <div>
                            <h1 className='text-3xl font-bold'>SIGN UP NEWSLETTER</h1>
                            <p className='my-2 text-lg text-slate-500'>Sign Up And Get Latest offer</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center'>
                        <input
                            type="email"
                            placeholder="Type Your E-mail"
                            className="input input-bordered input-info w-full max-w-xs rounded-full"
                            value={email}
                            onChange={handleChange}
                        />
                        <button
                            className='btn rounded-none rounded-r-lg -ml-6 bg-[#0cabfb] border-none my-3 text-white hover:bg-[#3ddbff]'
                            onClick={handleSubscribe}
                        >
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
