import React from 'react';

const BattleMode = () => {
  return (
    <div className="flex ">
      <button className="px-6 py-2 my-12 ml-[450px] text-xl font-bold bg-blue-600 text-white rounded-xl w-[150px] ">1 vs 1</button>
      <button className="px-6 py-2 my-12 ml-[30px] text-xl font-bold bg-blue-600 text-white rounded-xl w-[150px]">2 vs 2</button>
      <button className="px-6 py-2 my-12 ml-[20px] text-xl font-bold bg-blue-600 text-white rounded-xl w-[150px]">4 vs 4</button>
    </div>
  );
};

export default BattleMode;
