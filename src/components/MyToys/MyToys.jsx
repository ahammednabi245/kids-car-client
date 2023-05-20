import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';

const MyToys = () => {
    useTitle('My Toys');
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMyToys(data);
            });
    }, [user]);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Update</th>
                            <th>Delete</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {myToys?.map((job) => (
                            <tr>

                                <td>{job.sellerName}</td>
                                <td>{job.name}</td>
                                <td>{job.subCategory}</td>
                                <td>{job.price}</td>
                                <td>{job.quantity}</td>
                                <td> <button className="btn bg-[#0cabfb] border-none my-2 text-white hover:bg-[#3ddbff]">
                                    Update
                                </button></td>
                                <td> <button className="btn bg-[#0cabfb] border-none my-2 text-white hover:bg-[#3ddbff]">
                                    Delete
                                </button></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;
