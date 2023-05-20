// AllToysTables.jsx

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { AuthContext } from '../../providers/AuthProvider';

const AllToysTables = ({ toy }) => {
    const { user } = useContext(AuthContext);

    const SweetAlertContainer = () => {
        return <div id="sweet-alert-container"></div>;
    };

    const { _id, sellerName, name, subCategory, price, quantity } = toy || {};

    return (
        <>
            <tr>
                <td>{sellerName}</td>
                <td>{name}</td>
                <td>{subCategory}</td>
                <td>${price}</td>
                <td>{quantity}</td>
                <td>
                    <Link
                        to={`/allToysDetails/${_id}`}
                        onClick={() => {
                            if (!user) {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'You have to log in first to view details',
                                    confirmButtonText: 'OK',
                                });
                            }
                        }}
                    >
                        <button className="btn bg-[#0cabfb] border-none my-2 text-white hover:bg-[#3ddbff]">
                            View Details
                        </button>
                    </Link>
                    <SweetAlertContainer />
                </td>
            </tr>
        </>
    );
};

export default AllToysTables;
