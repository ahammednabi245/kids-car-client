import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';
import MyToysTables from './MyToysTables';

const MyToys = () => {
    useTitle('My Toys');
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/myToys/${user?.email}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setMyToys(data);
                })
                .catch((error) => {
                    console.error('Error fetching my toys:', error);
                });
        }
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
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myToys.map((toy) => (

                            <MyToysTables key={toy._id} toy={toy}></MyToysTables>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;
