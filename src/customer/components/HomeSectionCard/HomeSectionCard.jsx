import React from "react";

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[10rem] mx-3 h-[15rem]'>
  <div className='h-[6rem] w-full flex justify-center items-start p-2'> {/* Full width, centered image */}
        <img
          className='object-center object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/j/a/r/l-poch521835-peter-england-original-imag7jg47g7cxhg3-bb.jpeg?q=70" width={250} height={500} alt="Men's Solid Pure Cotton Kurta" />
      </div>
  <div className='p-4'>
    <h3 className='text-lg font-medium text-gray-900'>NoFilter</h3>
    <p className='mt-2 text-sm text-gray-500'>Men Solid Pure Cotton Straight Kurta</p>
  </div>
</div>
  );
};

export default HomeSectionCard;
