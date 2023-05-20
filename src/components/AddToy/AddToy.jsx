import React from 'react';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';

const AddToy = () => {

    useTitle('Add A Toy')

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const subCategory = form.subCategory.value;
        const description = form.description.value;
        const photo = form.photo.value;

        const newToy = { name, quantity, sellerName, sellerEmail, price, rating, subCategory, description, photo }

        // console.log(newToy);

        fetch('http://localhost:5000/postToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })

    }

    return (
        <div>
            <div className="bg-[#f2faff] p-24">
                <h2 className="text-5xl text-center text-slate-500 font-bold mb-8 ">Add A Toy</h2>
                <form onSubmit={handleAddToy}>


                    <div className='flex flex-col justify-start'>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Toy Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                            </label>
                        </div>



                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="sellerName" placeholder="Seller Name" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="sellerEmail" placeholder="Seller Email" className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>



                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Sub-Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="subCategory" placeholder="Sub-Category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text"> Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="mb-8">
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Photo URL of the toy</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="photo" placeholder="Photo URL of the toy" className="input input-bordered w-full" />
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

export default AddToy;