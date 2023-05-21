import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';


const toysDetails = () => {

    useTitle('All Toys Details')

    const toysId = useLoaderData();

    const { name, quantity, sellerName, sellerEmail, price, rating, subCategory, description, photo } = toysId;

    return (
        <div>
            <div>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className='w-3/6 bg-[#f3fafb] p-10 rounded-lg'>
                            <h1 className="text-5xl font-bold my-4">{name}</h1>
                            <p className="py-1 font-medium"><u>Sub-category:</u> <span className='font-normal'>{subCategory}</span></p>
                            <p className="py-1  font-medium"><u>Seller Name:</u> <span className='font-bold link-hover text-[#5cb6ea]'>{sellerName}</span></p>
                            <p className="py-1 font-medium"><u>Seller E-mail:</u> <span className='font-bold link-hover text-[#5cb6ea]'>{sellerEmail}</span></p>
                            <p className="py-1 font-medium"><u>Price:</u> <span className='font-normal'>{price}</span></p>
                            <p className='flex gap-2 my-3'>
                                <span className=''><u>Ratings:</u></span> <Rating
                                    placeholderRating={rating}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-[#fcb73f] '></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                    className='text-xl' /></p>
                            <p className="py-1 font-medium"><u>Available quantity:</u> <span className='font-normal'>{quantity}</span></p>
                            <p className="py-1 font-medium text-justify"><u>Description:</u> <span className='font-normal'>{description}</span></p>

                        </div>
                        <img src={photo} className="max-w-sm rounded-lg h-96 w-96 " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default toysDetails;