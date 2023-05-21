import React, { useContext } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ShopByCategory.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { AuthContext } from '../../providers/AuthProvider';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';




const ShopByCategoryCard = ({ category }) => {

  const { user } = useContext(AuthContext);

  const { PoliceCars, SportsCars, Jeeps } = category;

  const SweetAlertContainer = () => {
    return <div id="sweet-alert-container"></div>;
  };

 


  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Police car</Tab>
          <Tab>Sports car</Tab>
          <Tab>Jeep</Tab>
        </TabList>

        <TabPanel>
          <div className='grid gap-6 mb-4 lg:grid-cols-2 sm:grid-cols-1 '>
            {PoliceCars.map((car, index) => (
              <div key={index} className='card w-96 bg-base-100 shadow-xl'>
                <figure className='px-10 pt-10'>
                  <img src={car.img} alt='' className='rounded-xl h-44' />
                </figure>
                <div className='card-body '>
                  <h2 className='card-title'>{car.name}</h2>
                  <p className='text-justify'>Price: {car.price}</p>
                  <p className='flex gap-2 my-3'>
                        Ratings: <Rating
                            placeholderRating={car.rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-[#fcb73f] '></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                            className='text-xl' /></p>
                  <div className='card-actions'>


                    <Link
                      to={`/details/${car.category_id}`}
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
                      <button className='btn bg-[#0cabfb] border-none my-2 text-white  hover:bg-[#3ddbff]'>
                        View Details
                      </button>
                    </Link>


                    <SweetAlertContainer />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid gap-6 mb-4 lg:grid-cols-2 sm:grid-cols-2 '>
            {SportsCars.map((car, index) => (
              <div key={index} className='card w-96 bg-base-100 shadow-xl'>
                <figure className='px-10 pt-10'>
                  <img src={car.img} alt='' className='rounded-xl' />
                </figure>
                <div className='card-body '>
                  <h2 className='card-title'>{car.name}</h2>
                  <p className='text-justify'>Price: {car.price}</p>
                  <p className='flex gap-2 my-3'>
                        Ratings: <Rating
                            placeholderRating={car.rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-[#fcb73f] '></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                            className='text-xl' /></p>
                  <div className='card-actions'>
                    <Link
                      to={`/details/${car.category_id}`}
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
                      <button className='btn bg-[#0cabfb] border-none my-2 text-white  hover:bg-[#3ddbff]'>
                        View Details
                      </button>
                    </Link>

                    <SweetAlertContainer />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid gap-6 mb-4 lg:grid-cols-2 sm:grid-cols-2 '>
            {Jeeps.map((car, index) => (
              <div key={index} className='card w-96 bg-base-100 shadow-xl'>
                <figure className='px-10 pt-10'>
                  <img src={car.img} alt='' className='rounded-xl' />
                </figure>
                <div className='card-body '>
                  <h2 className='card-title'>{car.name}</h2>
                  <p className='text-justify'>Price: {car.price}</p>
                  <p className='flex gap-2 my-3'>
                        Ratings: <Rating
                            placeholderRating={car.rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-[#fcb73f] '></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                            className='text-xl' /></p>
                  <div className='card-actions'>
                    <Link
                      to={`/details/${car.category_id}`}
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
                      <button className='btn bg-[#0cabfb] border-none my-2 text-white  hover:bg-[#3ddbff]'>
                        View Details
                      </button>
                    </Link>

                    <SweetAlertContainer />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategoryCard;
