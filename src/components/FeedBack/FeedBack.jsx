import React from 'react';

const FeedBack = () => {
    return (
        <div>
            <div>
                <div className='flex justify-center items-center mt-6 '>
                    <div>
                        <h1 className=' border-r-4  border-[#0cabfb] p-5 text-center text-4xl font-semibold text-slate-500'>Client Review</h1>
                    </div>
                </div>
                <div className='grid gap-6 mb-4 lg:grid-cols-4 sm:grid-cols-2 p-10'>

                    <div className="card w-72 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=" alt="" className="rounded-xl" />
                        </figure>
                        <div className="p-5 items-center text-center">
                            <h2 className="card-title">Henry</h2>
                            <p className='text-justify'>The Aosom Bentley car is a fantastic product. It boasts a sleek design, excellent build quality, and smooth functionality. It provides an enjoyable and safe ride for children, making it a top choice for parents.</p>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked disabled />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                            </div>


                        </div>
                    </div>
                    <div className="card w-72 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://st4.depositphotos.com/1017228/20160/i/450/depositphotos_201608550-stock-photo-image-amazing-young-pretty-woman.jpg" alt="" className="rounded-xl" />
                        </figure>
                        <div className="p-5 items-center text-center">
                            <h2 className="card-title">Amelia</h2>
                            <p className='text-justify'>The Toddler Electric Car is a great investment. It offers a fun and exciting driving experience for little ones, with easy controls and safety features. It's durable, reliable, and guarantees hours of entertainment.</p>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked disabled />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  disabled />
                            </div>


                        </div>
                    </div>
                    <div className="card w-72 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://us.123rf.com/450wm/benzoix/benzoix2102/benzoix210204290/163856526-hey-check-this-out-happy-businessman-in-suit-pointing-fingers-down-and-smiling-inviting-to-event.jpg?ver=6" alt="" className="rounded-xl" />
                        </figure>
                        <div className="p-5 items-center text-center">
                            <h2 className="card-title">Oliver</h2>
                            <p className='text-justify'>The Bentley EXP is a remarkable car. With its breathtaking design, powerful performance, and luxurious features, it exemplifies elegance and craftsmanship. It's a true masterpiece that delivers an unforgettable driving experience.</p>
                            <div className="rating rating-md ">
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            </div>

                        </div>
                    </div>
                    <div className="card w-72 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://t4.ftcdn.net/jpg/03/30/25/97/360_F_330259751_tGPEAq5F5bjxkkliGrb97X2HhtXBDc9x.jpg" alt="" className="rounded-xl" />
                        </figure>
                        <div className="p-5 items-center text-center">
                            <h2 className="card-title">Isabella</h2>
                            <p className='text-justify'>The Jett Car is a reliable and efficient vehicle. It offers a comfortable ride, good fuel economy, and a range of convenient features. It's a practical choice for everyday transportation needs.</p>
                            <div className="rating rating-md ">
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default FeedBack;