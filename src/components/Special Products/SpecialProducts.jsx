import React, { useEffect, useState } from 'react';
import announcement from '../../assets/announcement.jpg'
import announcement2 from '../../assets/announcement2.jpg'



const SpecialProducts = () => {
    const [countdown, setCountdown] = useState({
        days: 15,
        hours: 10,
        minutes: 24,
        seconds: 46
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(prevCountdown => {
                const { days, hours, minutes, seconds } = prevCountdown;

                if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(interval);
                    return prevCountdown;
                }

                let updatedDays = days;
                let updatedHours = hours;
                let updatedMinutes = minutes;
                let updatedSeconds = seconds;

                if (seconds === 0) {
                    if (minutes === 0) {
                        if (hours === 0) {
                            updatedDays = Math.max(days - 1, 0);
                            updatedHours = 23;
                            updatedMinutes = 59;
                            updatedSeconds = 59;
                        } else {
                            updatedHours = Math.max(hours - 1, 0);
                            updatedMinutes = 59;
                            updatedSeconds = 59;
                        }
                    } else {
                        updatedMinutes = Math.max(minutes - 1, 0);
                        updatedSeconds = 59;
                    }
                } else {
                    updatedSeconds = Math.max(seconds - 1, 0);
                }

                return {
                    days: updatedDays,
                    hours: updatedHours,
                    minutes: updatedMinutes,
                    seconds: updatedSeconds
                };
            });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>

            <div>
                <div className='flex justify-center items-center  '>
                    <div>
                        <img className='w-20' src={announcement} alt="" />
                    </div>
                    <div className='flex justify-center items-center my-6 '>
                        <div>
                            <h1 className=' border-l-4  border-[#0cabfb] p-5 text-center text-4xl font-semibold text-slate-500'>OFFER</h1>
                        </div>
                    </div>

                </div>
                <div className="hero mt-3 bg-base-200 rounded-lg">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                                <div className="flex flex-col p-2 bg-[#0cabfb] rounded-box text-neutral-content">
                                    <span className="countdown  font-mono text-5xl">
                                        <span style={{ "--value": countdown.days }}></span>
                                    </span>
                                    days
                                </div>
                                <div className="flex flex-col p-2 bg-[#0cabfb]  rounded-box text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": countdown.hours }}></span>
                                    </span>
                                    hours
                                </div>
                                <div className="flex flex-col p-2 bg-[#0cabfb] rounded-box text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": countdown.minutes }}></span>
                                    </span>
                                    min
                                </div>
                                <div className="flex flex-col p-2 bg-[#0cabfb] rounded-box text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": countdown.seconds }}></span>
                                    </span>
                                    sec
                                </div>
                            </div>

                            <div className='flex lg:flex-row flex-col  gap-2'>
                                <h1 className="text-5xl font-bold mt-6">Special Toy <br /> Offer</h1>
                                <img className='w-20 ml-40 lg:ml-0' src={announcement2} alt="" />
                            </div>
                            <p className='text-lg py-6'>Get upto 40% off only this product & <br /> this time</p>
                            <button className=" btn bg-[#0cabfb] border-none my-2 text-white hover:bg-[#3ddbff]">Shop Now</button>
                        </div>
                        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-[#9ddcf9] rounded-box">
                            <div id="slide5" className="carousel-item relative w-full lg:w-80">
                                <img src="https://fliptoy.s3.ap-south-1.amazonaws.com/ssl-img/2022/05/27142241/aston-martin-510x510.jpg" className="" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide8" className="btn btn-circle bg-inherit hover:bg-[#66ccff] border-none text-3xl text-[#ffffff]">❮</a>
                                    <a href="#slide6" className="btn btn-circle bg-inherit hover:bg-[#66ccff] border-none text-3xl text-[#ffffff]">❯</a>
                                </div>
                            </div>
                            <div id="slide6" className="carousel-item relative w-full lg:w-80 h-80">
                                <img src="https://fliptoy.s3.ap-south-1.amazonaws.com/ssl-img/2022/05/27143018/bncbvnghjfghjfh.jpg" className="" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide5" className="btn btn-circle bg-inherit hover:bg-[#66ccff] border-none text-3xl text-[#ffffff]">❮</a>
                                    <a href="#slide7" className="btn btn-circle bg-inherit hover:bg-[#66ccff] border-none text-3xl text-[#ffffff]">❯</a>
                                </div>
                            </div>
                            <div id="slide7" className="carousel-item relative w-full lg:w-80 h-80">
                                <img src="https://fliptoy.s3.ap-south-1.amazonaws.com/ssl-img/2022/05/27142645/RIDE-ON-TOYS22-BLACK-510x510.jpg" className="" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide6" className="btn btn-circle bg-inherit hover:bg-[#66ccff] border-none text-3xl text-[#ffffff]">❮</a>
                                    <a href="#slide8" className="btn btn-circle bg-inherit hover:bg-[#66ccff] border-none text-3xl text-[#ffffff]">❯</a>
                                </div>
                            </div>
                            <div id="slide8" className="carousel-item relative w-full lg:w-80 h-80">
                                <img src="https://fliptoy.s3.ap-south-1.amazonaws.com/ssl-img/2022/05/27142600/SDFDDFGHJ67456746-510x510.jpg" className="" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide7" className="btn btn-circle bg-inherit hover:bg-[#66ccff] border-none text-3xl text-[#ffffff]">❮</a>
                                    <a href="#slide5" className="btn btn-circle bg-inherit hover:bg-[#66ccff] border-none text-3xl text-[#ffffff]">❯</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SpecialProducts;