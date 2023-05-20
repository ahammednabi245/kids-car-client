import React, { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import './ShopByCategory.css';
import ShopByCategoryCard from './ShopByCategoryCard';

const ShopByCategory = () => {
    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then((res) => res.json())
            .then((data) => setCatagories(data));
    }, []);

    return (
        <div>
            <div className='flex justify-center items-center my-6 '>
                <div>
                    <h1 className=' border-r-4  border-[#0cabfb] p-5 text-center text-4xl font-semibold text-slate-500'>
                        Shop By Category
                    </h1>
                </div>
            </div>

            <div>
                {catagories.map((category) => (
                    <ShopByCategoryCard key={category._id} category={category} />
                ))}
            </div>
        </div>
    );
};

export default ShopByCategory;
