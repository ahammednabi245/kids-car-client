import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../../Gallery/Gallery';
import SpecialProducts from '../../Special Products/SpecialProducts';
import FeedBack from '../../FeedBack/FeedBack';
import NewsLetter from '../../NewsLetter/NewsLetter';
import ShopByCategory from '../../ShopByCategory/ShopByCategory';
import { AuthContext } from '../../../providers/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Home = () => {

    useTitle('Home')

    const { loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '100px'  }}>
                <div className="spinner"></div>
            </div>
        );
    }
    return (
        <div>
            <div className='px-10'>
                <Banner></Banner>
                <Gallery></Gallery>
                <ShopByCategory></ShopByCategory>
                <SpecialProducts></SpecialProducts>
                <NewsLetter></NewsLetter>
                <FeedBack></FeedBack>
            </div>
        </div>
    );
};

export default Home;