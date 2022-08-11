import React from 'react';
import { Link } from 'react-router-dom';


const DomainExistingUser = () => {
  return (
    <section className='bg-gray-200 flex items-center h-screen w-full lg:px-0 px-8'>
      <div className='max-w-5xl mx-auto'>
        <h2 className="font-bold text-5xl leading-relaxed text-center mb-6">Enter your Domain name to get Started</h2>
        <p className='font-medium text-xl leading-relaxed text-center mb-10'>Enjoy access using your existing domain name</p>
        
        <div className='flex'>
          <input 
            type="text"
            className="h-12 rounded-md bg-gray-50 border flex-1 w-3/4 border-gray-300 text-gray-900 text-sm focus:ring-gray-500 p-2.5 pr-12 "
            placeholder="Search Posts"
          />
          <button className="colorbtn-bg rounded-md font-semibold w-1/4 h-12 bg-gray-400 ml-4 text-center">Search</button>
        </div>

        <p className='text-xl leading-8 font-medium mt-14 text-center'>Don't have a Domain? <Link to="/domian-new-user" className='hover:underline'>Click here Instead</Link> </p>
      </div>
    </section>
  );
}

export default DomainExistingUser;