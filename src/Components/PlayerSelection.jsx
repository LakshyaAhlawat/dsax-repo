import React from 'react';
import { FaPlus } from "react-icons/fa";
const PlayerSelection = () => {
  return (
    <div className="flex justify-center space-x-[100px] my-8">
      
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-600 w-[130px] h-24 flex items-center justify-center text-white rounded-xl"><FaPlus className='text-4xl'/></div>
            <div className="bg-blue-600 w-[130px] h-24 flex flex-col items-center justify-center text-white rounded-xl">
              <img src='https://static.vecteezy.com/system/resources/thumbnails/024/624/706/small_2x/3d-rendering-person-icon-3d-render-blue-user-sign-icon-png.png' className='rounded-full w-12 h-12'></img>
              <div>You</div>
            </div>
            <div className="bg-blue-600 w-[130px] h-24 flex items-center justify-center text-white rounded-xl"><FaPlus className='text-4xl'/></div>
            <div className="bg-blue-600 w-[130px] h-24 flex items-center justify-center text-white rounded-xl"><FaPlus className='text-4xl'/></div>
          </div>
          {/*here i am creating vertical divider*/ }
          <div className="relative flex flex-col items-center ">
            <div className="w-px bg-gray-400 h-full "></div>
            <span className="absolute top-1/2 -translate-y-1/2 bg-gray-900 px-2 text-white text-4xl rounded">VS</span>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="bg-blue-600 w-[130px] h-24 flex flex-col items-center justify-center text-white rounded-xl"><img src='https://static.vecteezy.com/system/resources/thumbnails/024/624/706/small_2x/3d-rendering-person-icon-3d-render-blue-user-sign-icon-png.png' className='rounded-full w-12 h-12'></img>
            <div>You</div></div>
            <div className="bg-blue-600 w-[130px] h-24 flex items-center justify-center text-white rounded-xl" ><FaPlus className='text-4xl'/></div>
            <div className="bg-blue-600 w-[130px] h-24 flex items-center justify-center text-white rounded-xl"><FaPlus className='text-4xl'/></div>
            <div className="bg-blue-600 w-[130px] h-24 flex items-center justify-center text-white rounded-xl"><FaPlus className='text-4xl'/></div>
            <div className="bg-blue-600 w-[130px] h-24 flex items-center justify-center text-white rounded-xl"><FaPlus className='text-4xl'/></div>
            <div className="bg-blue-600 w-[130px] h-24 flex items-center justify-center text-white rounded-xl"><FaPlus className='text-4xl'/></div>
            <div className="bg-blue-600 w-[130px] h-24 flex items-center justify-center text-white rounded-xl"><FaPlus className='text-4xl'/></div>
            <div className="bg-blue-600 w-[130px] h-24 flex items-center justify-center text-white rounded-xl"><FaPlus className='text-4xl'/></div>
            <div className="bg-blue-600 w-[130px] h-24 flex items-center justify-center text-white rounded-xl"><FaPlus className='text-4xl'/></div>
          </div>
      
    </div>
  );
};

export default PlayerSelection;
