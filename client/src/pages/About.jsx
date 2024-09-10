import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div 
      className='h-screen w-full bg-cover bg-center' 
      style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/005/327/854/large_2x/white-house-model-in-blue-background-for-refinance-plan-and-real-estate-concept-free-photo.jpg")' }} 
    >
      <div className='flex items-center justify-center h-full bg-black bg-opacity-40'>
        <div className='flex flex-col gap-6 p-6 max-w-6xl mx-auto text-white'>
          <h1 className='text-4xl font-bold mb-6 text-center'>
            About <span className='text-slate-700'>HomEzy Estate</span>
          </h1>
          <div className='text-lg leading-relaxed text-center text-gray-100'>
            <p>
              Welcome to <span className='text-slate-800'>HomEzy Estate</span>, your trusted partner in the real estate market. 
              We specialize in connecting clients with their ideal properties, whether you are looking to buy, sell, or rent. 
              Our dedicated team of experienced agents is here to guide you through every step of the process, ensuring a seamless experience tailored to your unique needs.
            </p>
            <p className='mt-4'>
              Our mission is to empower clients to make informed real estate decisions. With our in-depth knowledge of local markets and commitment to personalized service, we strive to exceed your expectations. 
              From initial consultations to final transactions, we are dedicated to providing the highest level of service and expertise.
            </p>
            <p className='mt-4'>
              At <span className='text-slate-800'>HomEzy Estate</span>, we understand that real estate is not just about transactions; it’s about building lasting relationships. 
              Our agents are passionate about helping you achieve your real estate goals and making the journey enjoyable and rewarding. 
              Let us help you find your dream home or maximize the value of your property.
            </p>
            <p className='mt-4'>
              Join us at <span className='text-slate-800'>HomEzy Estate</span>, where your real estate dreams become reality. 
              <Link to={'/contact'} className='text-blue-400 hover:underline'> Contact us</Link> today to learn how we can assist you in your journey through the real estate landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
