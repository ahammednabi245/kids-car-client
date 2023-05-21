import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import AllToysTables from './AllToysTables';
import Swal from 'sweetalert2';

const AllToys = () => {
    useTitle('All Toys');

    const [toys, setToys] = useState([]);
    const [showAllToys, setShowAllToys] = useState(false);
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetch(`https://kids-car-server.vercel.app/allToys?page=${page}&limit=20`)
            .then((res) => res.json())
            .then((result) => {
                setToys(result);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [page]);

    const handleSearch = () => {
        if (searchText.trim() === '') {
            let timerInterval
            Swal.fire({
                title: 'Please write what you are looking for!',
                html: 'I will close in <b></b> milliseconds.',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                  Swal.showLoading()
                  const b = Swal.getHtmlContainer().querySelector('b')
                  timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                  }, 100)
                },
                willClose: () => {
                  clearInterval(timerInterval)
                }
              }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                  console.log('I was closed by the timer')
                }
              })
            return;
        }

        fetch(`https://kids-car-server.vercel.app/allToysByText/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToys(data);
                setSearchText(''); // Reset the search field
            });
    };

    const handleClickShowMore = () => {
        setPage((prevPage) => prevPage + 1);
        setShowAllToys(true);
    };

    const visibleToys = showAllToys ? toys : toys.slice(0, 20);

    return (
        <div>
            <div className='flex justify-center'>
                <div className="form-control my-6 ">
                    <div className="input-group">
                        <input
                            onChange={(e) => setSearchText(e.target.value)}
                            type="text"
                            placeholder="Search…"
                            className="input input-bordered"
                            value={searchText}
                        />
                        <button
                            onClick={handleSearch}
                            className="btn btn-square bg-[#0cabfb] border-none text-white hover:bg-[#3ddbff]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
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
                        {visibleToys.map((toy) => (
                            <AllToysTables key={toy._id} toy={toy} />
                        ))}
                    </tbody>
                </table>
            </div>

            {!showAllToys && (
                <div className="flex justify-center my-2">
                    <button
                        className="btn bg-[#0cabfb] border-none my-2 text-white hover:bg-[#3ddbff]"
                        onClick={handleClickShowMore}
                    >
                        Show More Toy
                    </button>
                </div>
            )}
        </div>
    );
};

export default AllToys;
