import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToys = () => {
  useTitle('My Toys');
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortOption, setSortOption] = useState('Price-Descending');

  useEffect(() => {
    const fetchMyToys = async () => {
      try {
        const sortType = sortOption === 'Price-Ascending' ? 'ascending' : 'descending';
        const response = await fetch(`https://kids-car-server.vercel.app/myToys?email=${user?.email}&type=${sortType}&value=price`);
        const data = await response.json();
        setMyToys(data);
      } catch (error) {
        console.error('Error fetching toys:', error);
      }
    };

    fetchMyToys();
  }, [user, sortOption]);

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://kids-car-server.vercel.app/myToys/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your Toy has been deleted.',
                'success'
              );
              const remaining = myToys.filter(toy => toy._id !== _id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className='flex justify-center mb-8'>
        <select className="select select-info w-full max-w-xs" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="Price-Descending">Price-Descending</option>
          <option value="Price-Ascending">Price-Ascending</option>
        </select>
      </div>
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
            {myToys?.map((myToy) => (
              <tr key={myToy._id}>
                <td>{myToy.sellerName}</td>
                <td>{myToy.name}</td>
                <td>{myToy.subCategory}</td>
                <td>{myToy.price}</td>
                <td>{myToy.quantity}</td>
                <td>
                  <Link to={`/updateToy/${myToy._id}`}>
                    <button className="btn bg-[#0cabfb] border-none my-2 text-white hover:bg-[#3ddbff]">
                      Update
                    </button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDelete(myToy._id)} className="btn bg-[#0cabfb] border-none my-2 text-white hover:bg-[#3ddbff]">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
