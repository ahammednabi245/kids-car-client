


import { Link } from 'react-router-dom';


const MyToysTables = ({ toy }) => {
 
  const {  sellerName, name, subCategory, price, quantity } = toy || {};

 

  return (
    <tr>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <Link >
          <button className="btn bg-[#0cabfb] border-none my-2 text-white hover:bg-[#3ddbff]">
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default MyToysTables;
