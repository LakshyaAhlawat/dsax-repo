import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { TbSeparator } from "react-icons/tb";
import PillButtonGroup from './PillButton';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";



const SettingsPanel = () => {
  return (

    

    <div className="bg-gradient-to-r from-[#0c0c40] to-[#000c24] p-8 rounded-xl text-white max-w mx-auto">
      <div className='flex '>
          <h2 className="text-3xl font-bold mb-6 tracking-widest">SETTINGS</h2>
          <button className="text-sm text-white font-semibold tracking-widest ml-[1000px] mb-5">RESTORE DEFAULT SETTINGS</button>
          
      </div>

      <div className="space-y-4">
        {/* Difficulty */}
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <span className="text-xl font-bold font-serif">Difficulty </span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <PillButtonGroup></PillButtonGroup>
          </span>
          
          
        </div>

        {/* Topic */}
        <div className="flex items-center justify-between">
        <span className="flex items-center gap-2">
            <span className="text-xl font-bold font-serif">Topic </span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <button className="bg-white text-black px-6 py-2 rounded-full flex items-center space-x-2">
              <span className='font-semibold w-24'>Normal</span>
            </button>

            <button className='w-12 h-12 border rounded-full bg-white text-center '><FaChevronDown className='text-black ml-4' /></button>
          </span>
        </div>

        {/* Programming Language */}
        <div className="flex items-center justify-between">
        <span className="flex items-center gap-2">
            <span className='text-xl'> <span className='text-gray-500'>Programming</span> <span className=''>Language</span> </span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <button className="bg-white text-black px-6 py-2 rounded-full flex items-center space-x-2">
              <span className='font-semibold w-24'>Normal</span>
            </button>

            <button className='w-12 h-12 border rounded-full bg-white text-center '><FaChevronDown className='text-black ml-4' /></button>
          </span>
        </div>

        {/* Total number of Questions */}
        <div>
          <span className="text-lg flex"><span className='text-gray-500'>Total number of</span> <span className='ml-3'>Questions</span>
                <span className='flex py-2 ml-2'>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>

                    {/* <span className="flex space-x-2 mr-[400px] mb-5 "> */}
                    <span>
                          <button className=" text-black px-4"><FaMinus className='text-white' />
                          </button>
                          <span className="text-lg w-16 h-12 border rounded-full bg-white text-black mb-5 font-semibold pb-1  pt-2 px-5">20</span>
                          <button className=" text-black px-4"><FaPlus className='text-white' />
                          </button>
                    </span>
                    {/* </span> */}
                  
                </span>
             
          </span>
          
        </div>
        

        {/* Total Time */}
        <div>
          <span className="text-lg flex"><span>Total Time</span>
                <span className='flex py-2 ml-2'>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>
                    <span className='ml-1'><TbSeparator/></span>

                    {/* <span className="flex space-x-2 mr-[400px] mb-5 "> */}
                    <span>
                          <button className=" text-black px-4"><FaMinus className='text-white' />
                          </button>
                          <span className="text-lg w-16 h-12 border rounded-full bg-white text-black mb-5 font-semibold pb-1  pt-2 px-5">20</span>
                          <button className=" text-black px-4"><FaPlus className='text-white' />
                          </button>
                    </span>
                    {/* </span> */}
                  
                </span>
             
          </span>
          
        </div>

        {/* Company */}
        <div className="flex items-center justify-between">
        <span className="flex items-center gap-2">
            <span className="text-xl  font-serif">Company </span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <span><TbSeparator/></span>
            <button className="bg-white text-black px-6 py-2 rounded-full flex items-center space-x-2">
              <span className='font-semibold w-24'>Normal</span>
            </button>

            <button className='w-12 h-12 border rounded-full bg-white text-center '><FaChevronDown className='text-black ml-4' /></button>
          </span>
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-full">Apply</button>
      </div>
    </div>

    
  );
};

export default SettingsPanel;
