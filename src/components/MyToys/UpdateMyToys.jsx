import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateMyToys = () => {
    const [control, setControl] = useState(false);
    const toysId = useLoaderData();
    const {
        _id,
        name,
        quantity,
        sellerName,
        sellerEmail,
        price,
        rating,
        subCategory,
        description,
        photo,
    } = toysId;

    const handleToyUpdate = (event) => {
        event.preventDefault();
        const updatedToy = {
            _id,
            name: event.target.name.value,
            quantity: event.target.quantity.value,
            sellerName: event.target.sellerName.value,
            sellerEmail: event.target.sellerEmail.value,
            price: event.target.price.value,
            rating: event.target.rating.value,
            subCategory: event.target.subCategory.value,
            description: event.target.description.value,
            photo: event.target.photo.value,
        };

        console.log(updatedToy);

        fetch(`http://localhost:5000/updateToy/${updatedToy._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedToy),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    setControl(!control);
                }
                console.log(result);
            })
            .catch((error) => {
                console.error('Error updating toy:', error);
            });
    };



    return (
        <div>
            <div className="bg-[#f2faff] p-24">
                <h2 className="text-5xl text-center text-slate-500 font-bold mb-8 ">Update  Toy</h2>
                <form onSubmit={handleToyUpdate}>


                    <div className='flex flex-col justify-start'>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} placeholder="Toy Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                            </label>
                        </div>



                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="sellerName" defaultValue={sellerName} placeholder="Seller Name" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="sellerEmail" defaultValue={sellerEmail} placeholder="Seller Email" className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>



                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Sub-Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="subCategory" defaultValue={subCategory} placeholder="Sub-Category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text"> Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="mb-8">
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Photo URL of the toy</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL of the toy" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <input type="submit" value="Add Toy" className="btn btn-wide bg-[#0cabfb] border-none my-2 ml-4 text-white hover:bg-[#3ddbff]" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateMyToys;