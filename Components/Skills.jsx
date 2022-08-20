import React from "react";
import Image from "next/image";
import Logo from "../public/assets/logo.jpg";

const Skills = () => {
  return (
    <div id="skills" className="h-screen w-full bg-[#ecf0f3]">
       <div className="text-black py-20 lg:py-[120px] overflow-hidden relative z-10">

<div className="container xl:max-w-6xl mx-auto px-4">
    <header className="text-center mx-auto mb-12 lg:px-20">
        <h2 className="text-2xl leading-normal mb-2 font-bold ">
        Tecnologies / Frameworks
        </h2>
        <p className=" leading-relaxed font-light text-xl mx-auto pb-2">
        My favorite tecnologies!
        </p>
    </header>
</div>

<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
    >
      <div className="mb-8">
        <div className="radial-progress bg-accent text-accent-content border-4 border-accent" >70%</div>
      </div>
      <div className="text-center">
        <p className="text-xl text-white font-bold mb-2">PHP</p>
        <p className="text-base text-gray-400 font-normal">________________________________________</p>
      </div>
    </div>

    <div
      className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
    >
      <div className="mb-8">
        
      </div>
      <div className="text-center">
        <p className="text-xl text-white font-bold mb-2">Java</p>
        <p className="text-base text-gray-400 font-normal">________________________________________</p>
      </div>
    </div>

    <div
      className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
    >
      <div className="mb-8">
        <div className="radial-progress bg-accent text-accent-content border-4 border-accent" >80%</div>
      </div>
      <div className="text-center">
        <p className="text-xl text-white font-bold mb-2">JavaScript</p>
        <p className="text-base text-gray-400 font-normal">________________________________________</p>
      </div>
    </div>

    <div
      className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
    >
      <div className="mb-8">
        <div className="radial-progress bg-accent text-accent-content border-4 border-accent" >60%</div>
      </div>
      <div className="text-center">
        <p className="text-xl text-white font-bold mb-2">React</p>
        <p className="text-base text-gray-400 font-normal">________________________________________</p>
      </div>
    </div>

    <div
      className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
    >
      <div className="mb-8">
        <div className="radial-progress bg-accent text-accent-content border-4 border-accent" >70%</div>
      </div>
      <div className="text-center">
        <p className="text-xl text-white font-bold mb-2">VueJS</p>
        <p className="text-base text-gray-400 font-normal">________________________________________</p>
      </div>
    </div>
    
    <div
      className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
    >
      <div className="mb-8">
        <div className="radial-progress bg-accent text-accent-content border-4 border-accent" >85%</div>
      </div>
      <div className="text-center">
        <p className="text-xl text-white font-bold mb-2">HTML/CSS</p>
        <p className="text-base text-gray-400 font-normal">________________________________________</p>
      </div>
    </div>
  </div>
</section>
</div>
    </div>
  );
};

export default Skills;
