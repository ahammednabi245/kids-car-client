import React from 'react';
import banner1 from '../../../assets/banner1.png'
import banner2 from '../../../assets/banner2.png'

const Banner = () => {
    return (
        <div>

            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero min-h-screen rounded" style={{
                        backgroundImage: `url(${banner1})`,

                    }}>

                        <div className="hero-content text-center text-neutral-content flex 
                          flex-col lg:flex-row justify-center items-center">
                            <div>
                                <p className='text-2xl font font-medium text-slate-500 '>Model WMT-919 Car</p>
                                <h1 className="my-3 text-6xl font-bold text-slate-800">Kids Driving Car</h1>
                                <p className='text-slate-500'>Get upto 30% off on your first order</p>
                                <button className=" btn bg-[#0cabfb] border-none my-3 text-white hover:bg-[#3ddbff]">Shop Now</button>
                            </div>
                            <div className="mx-auto  lg:ml-96 w-80  ">
                                <img className='rounded-full' src="https://i.ibb.co/hDMtK56/kids-driving-car.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-start  transform -translate-y-1/2 left-5  right-5 -bottom-6">
                        <a href="#slide4" className="btn btn-circle bg-[#66ccff] hover:bg-[#3ddbff] border-none mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-[#66ccff] hover:bg-[#3ddbff] border-none">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full p">
                    <div className="hero min-h-screen rounded" style={{
                        backgroundImage: `url(${banner2})`,

                    }}>

                        <div className='flex lg:flex-row  flex-col '>
                            <div className="w-80   ">
                                <img className='rounded-full' src="https://fliptoy.s3.ap-south-1.amazonaws.com/ssl-img/2022/05/27142118/71dEWXwH0cL._SL1500_-510x510.jpg" alt="" />
                            </div>

                            <div className="hero-content text-center text-neutral-content flex 
                          flex-col lg:flex-row justify-center items-center">
                                <div className='lg:ml-80 -ml-1 -mt-7'>
                                    <p className='text-2xl font font-medium text-slate-500 '> Licensed mercedes benz <br /> ride on car</p>
                                    <h1 className="my-2 text-6xl font-bold text-slate-800">Kids Driving Car</h1>
                                    <p className='text-slate-500'>Get upto 25% off on your first order</p>
                                    <button className=" btn bg-[#0cabfb] border-none my-2 text-white hover:bg-[#3ddbff]">Shop Now</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 -bottom-8">
                        <a href="#slide1" className="btn btn-circle bg-[#66ccff] hover:bg-[#3ddbff] border-none mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-[#66ccff] hover:bg-[#3ddbff] border-none">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero min-h-screen rounded" style={{
                        backgroundImage: `url(${banner1})`,

                    }}>

                        <div className="hero-content text-center text-neutral-content flex 
                          flex-col lg:flex-row justify-center items-center">
                            <div>
                                <p className='text-2xl font font-medium text-slate-500 '>Model: FLP-900</p>
                                <h1 className="my-3 text-6xl font-bold text-slate-800">Kids Driving Car</h1>
                                <p className='text-slate-500'>Get upto 15% off on your first order</p>
                                <button className=" btn bg-[#0cabfb] border-none my-3 text-white hover:bg-[#3ddbff]">Shop Now</button>
                            </div>
                            <div className="mx-auto  lg:ml-96 w-80  ">
                                <img className='rounded-full lg:rounded' src="https://i.ibb.co/n01JX0k/kids-driving-car2.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-start  transform -translate-y-1/2 left-5 right-5 -bottom-6">
                        <a href="#slide2" className="btn btn-circle bg-[#66ccff] hover:bg-[#3ddbff] border-none mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-[#66ccff] hover:bg-[#3ddbff] border-none">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="hero min-h-screen rounded" style={{
                        backgroundImage: `url(${banner2})`,

                    }}>

                        <div className='flex lg:flex-row  flex-col '>
                            <div className="w-80   ">
                                <img className='rounded-full' src="https://fliptoy.s3.ap-south-1.amazonaws.com/ssl-img/2022/05/27142544/lkdfkjlgsdlgjsdkjgkdsfg-510x510.jpg" alt="" />
                            </div>

                            <div className="hero-content text-center text-neutral-content flex 
                          flex-col lg:flex-row justify-center items-center">
                                <div className='lg:ml-80 -ml-1 -mt-2'>
                                    <p className='text-2xl font font-medium text-slate-500 '> 12V 3.7 MPH 2-Seater jeep</p>
                                    <h1 className="my-2 text-6xl font-bold text-slate-800">Kids Driving Car</h1>
                                    <p className='text-slate-500'>Get upto 20% off on your first order</p>
                                    <button className=" btn bg-[#0cabfb] border-none my-2 text-white hover:bg-[#3ddbff]">Shop Now</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 -bottom-7">
                        <a href="#slide3" className="btn btn-circle bg-[#66ccff] hover:bg-[#3ddbff] border-none mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-[#66ccff] hover:bg-[#3ddbff] border-none">❯</a>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Banner;