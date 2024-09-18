"use client"
import * as React from 'react';
import Blog from './Blog';
const Blogs = () => {
  return (
    <>
      <section>
        <div className="min-h-screen text-center bg-white dark:bg-black   py-20 md:py-16 px-8 sm:px-10 lg:px-8">
        <div className="relative text-center mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute text-2xl font-bold md:text-5xl left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span>Latest Blogs</span>
          </div>
          <div className="relative text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span>Latest Blogs</span>
          </div>
        </div>
          <div className="max-w-6xl mx-auto">
            <Blog />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;