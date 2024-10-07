import { tw } from 'twind';
import React from 'react';

const Statistics = () => {
  return (
    <section className="bg-blue-500 py-10">
      <div
        className="container mx-auto text-white text-left"
        style={{
          backgroundImage: 'linear-gradient(to right, #014783, #0287DF)',
          width: '80%',
          padding: '5%',
          borderRadius: '30px',
        }}
      >
        <h1 className="text-white text-4xl lg:text-6xl font-light text-left" style={{ borderBottom: '1px solid white', paddingBottom: '2%', width: '70%' }}>
          We solve technology challenges.
        </h1>

        <div className="container mx-auto mt-16 flex flex-wrap justify-start gap-8">
          <div
            className="bg-opacity-10 border-l-2 border-white shadow-md p-6 flex flex-col text-left"
            style={{
              backgroundColor: 'transparent',
              borderLeft: '2px solid white',
              flex: '1 1 calc(25% - 2rem)', // makes it responsive
              minWidth: '180px', // sets a fixed minimum width for responsiveness
            }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold">6</h2>
            <p className="mt-2">Years Experience</p>
          </div>
          <div
            className="bg-opacity-10 border-l-2 border-white shadow-md p-6 flex flex-col text-left"
            style={{
              backgroundColor: 'transparent',
              borderLeft: '2px solid white',
              flex: '1 1 calc(25% - 2rem)',
              minWidth: '180px',
            }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold">150+</h2>
            <p className="mt-2">Happy Customers</p>
          </div>
          <div
            className="bg-opacity-10 border-l-2 border-white shadow-md p-6 flex flex-col text-left"
            style={{
              backgroundColor: 'transparent',
              borderLeft: '2px solid white',
              flex: '1 1 calc(25% - 2rem)',
              minWidth: '180px',
            }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold">300+</h2>
            <p className="mt-2">Projects Completed</p>
          </div>
          <div
            className="bg-opacity-10 border-l-2 border-white shadow-md p-6 flex flex-col text-left"
            style={{
              backgroundColor: 'transparent',
              borderLeft: '2px solid white',
              flex: '1 1 calc(25% - 2rem)',
              minWidth: '180px',
            }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold">10</h2>
            <p className="mt-2">Awards Achievements</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-16 text-black flex flex-wrap justify-center gap-8">
        <div className="flex flex-col text-left" style={{ width: '20%', padding: '1% 2%' }}>
          <span className="text-4xl" style={{marginBottom:'5%'}}>⭐</span>
          <h3 className="font-bold mt-4">Expertise</h3>
          <p className="mt-2">
            Access to specialized knowledge and technology expertise for effective IT solutions.
          </p>
        </div>
        <div className="flex flex-col text-left" style={{ width: '20%', padding: '1% 2%' }}>
          <span className="text-4xl" style={{marginBottom:'5%'}}>💲</span>
          <h3 className="font-bold mt-4">Cost Savings</h3>
          <p className="mt-2">
            Avoiding expenses associated with maintaining an in-house IT department.
          </p>
        </div>
        <div className="flex flex-col text-left" style={{ width: '20%', padding: '1% 2%' }}>
          <span className="text-4xl" style={{marginBottom:'5%'}}>🔒</span>
          <h3 className="font-bold mt-4">Enhanced Security</h3>
          <p className="mt-2">
            Robust measures to protect against cyber threats and ensure data security.
          </p>
        </div>
        <div className="flex flex-col text-left" style={{ width: '20%', padding: '1% 2%' }}>
          <span className="text-4xl" style={{marginBottom:'5%'}}>⚙️</span>
          <h3 className="font-bold mt-4">Increased Efficiency</h3>
          <p className="mt-2">
            Streamlined operations and proactive monitoring for improved productivity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
