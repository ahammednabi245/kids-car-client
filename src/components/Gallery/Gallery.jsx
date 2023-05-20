import React from 'react';
import './Gallery.css'
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <div>
            <div className='my-6'>
                <div className='flex justify-center items-center  '>
                    <div>
                        <h1 className=' border-l-4  border-[#0cabfb] p-5 text-center text-4xl font-semibold text-slate-500'>Car Gallery</h1>
                    </div>
                </div>

                <div className='grid gap-6 mb-4 lg:grid-cols-3 sm:grid-cols-2 p-10'>

                 

                    <div className="card card-compact w-96 bg-base-100 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:brightness-50 rotation">
                        <figure><img src="https://m.media-amazon.com/images/I/81POT1gM6dL._AC_SX569_.jpg" alt="" /></figure>

                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:brightness-50 rotation">
                        <figure><img src="https://m.media-amazon.com/images/I/718KWBV9bJL._AC_SX569_.jpg" alt="" /></figure>

                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:brightness-50 rotation">
                        <figure><img src="https://m.media-amazon.com/images/I/71mR7crbd6L._AC_SX569_.jpg" alt="" /></figure>

                    </div>

                    <div className="card card-compact w-96 bg-base-100 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:brightness-50 rotation">
                        <figure><img src="https://m.media-amazon.com/images/I/81shqDFVLjL._AC_SX569_.jpg" alt="" /></figure>

                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:brightness-50 rotation">
                        <figure><img src="https://m.media-amazon.com/images/I/719h3FgnpSL._AC_SX569_.jpg" alt="" /></figure>

                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:brightness-50 rotation">
                        <figure><img src="https://m.media-amazon.com/images/I/71IfhL7AsUL._AC_SX569_.jpg" alt="" /></figure>

                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:brightness-50 rotation">
                        <figure><img src="https://m.media-amazon.com/images/I/515k3kYcdvL._AC_SX569_.jpg" alt="" /></figure>

                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:brightness-50 rotation">
                        <figure><img src="https://m.media-amazon.com/images/I/71Nh2otGROL._AC_SX679_.jpg" alt="" /></figure>

                    </div>
                </div>
                <div className='flex justify-center'>
                    <Link to="/learn"> <button className=" btn bg-[#0cabfb] border-none my-2 
                       text-white  hover:bg-[#3ddbff]">Explore</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Gallery;