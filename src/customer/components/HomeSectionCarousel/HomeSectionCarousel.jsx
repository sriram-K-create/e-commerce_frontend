import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    700: { items: 3 },
    1024: { items: 4 },
  };

  const items = [1, 1, 1, 1].map((item, index) => (
    <div key={index} className="mx-4">
      {/* mx-4 adds horizontal margin to increase the gap */}
      <HomeSectionCard />
    </div>
  ));

  return (
    <div className=" relative px-2 overflow-hidden lg:px-8 ">
      <div className="relative p-5 " style={{ maxHeight: '800px' }}>
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
          disableDotsControls
          paddingLeft={20}
          paddingRight={20}
        />
        <Button variant="contained" className="z-50" sx={{position:'absolute', top:"8rem",right:"0rem" , transform:"translateX(50%) rotate(90deg)",bgcolor:"white"}} aria-label="next">
        <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)",color:"black"}}/>
        </Button>

        <Button variant="contained" className="z-50" sx={{position:'absolute', top:"8rem",left:"0rem" , transform:"translateX(50%) rotate(90deg)",bgcolor:"white"}} aria-label="next">
        <KeyboardArrowLeftIcon sx={{transform:"rotate(-90deg)",color:"black"}}/>
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
