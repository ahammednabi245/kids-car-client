import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import eBackground from '../../assets/ebackground.png'

const ErrorPage = () => {

    const { error, status } = useRouteError()

    return (
        <div >

            {/* Error Picture */}

            <div className='flex items-center  p-16  ' style={{
                backgroundImage: `url(${eBackground})`,
                backgroundSize: "100% 100%",
                height: "100vh"
            }}>
                <div className='mx-auto '>
                    <div className='max-w-md text-center -mb-20 mt-96'>

                        <p className='text-2xl font-semibold md:text-3xl text-white mb-8'>
                            {error?.message}
                        </p>
                        <Link to='/' className='btn bg-[#0cabfb] border-none my-2 text-white hover:bg-[#3ddbff]'>
                            BACK To HOME
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage