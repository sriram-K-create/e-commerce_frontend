import React from 'react';
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";

const HomePage = () => {
    return (
        <div>
            <MainCarousel/>

            <div>
                <HomeSectionCarousel/>
            </div>

            <div>
                other Section
            </div>
        </div>
    );
};

export default HomePage;