import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-gradient-to-r from-purple-300 to-orange-100'>
      <div>
        <h1 className='w-full text-2xl font-bold text-black'>Gulsher..</h1>
        <p className='py-4 text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6 text-orange-600 '>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-black'>Solutions</h6>
            <ul>
                <li className='py-2 text-sm text-black'>Analytics</li>
                <li className='py-2 text-sm text-black'>Marketing</li>
                <li className='py-2 text-sm text-black'>Commerce</li>
                <li className='py-2 text-sm text-black'>Insights</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-black'>Support</h6>
            <ul>
                <li className='py-2 text-sm text-black'>Pricing</li>
                <li className='py-2 text-sm text-black'>Documentation</li>
                <li className='py-2 text-sm text-black'>Guides</li>
                <li className='py-2 text-sm text-black'>API Status</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-black'>Company</h6>
            <ul>
                <li className='py-2 text-sm text-black'>About</li>
                <li className='py-2 text-sm text-black'>Blog</li>
                <li className='py-2 text-sm text-black'>Jobs</li>
                <li className='py-2 text-sm text-black'>Press</li>
                <li className='py-2 text-sm text-black'>Careers</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-black'>Legal</h6>
            <ul>
                <li className='py-2 text-sm text-black'>Claim</li>
                <li className='py-2 text-sm text-black'>Policy</li>
                <li className='py-2 text-sm text-black'>Terms</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
