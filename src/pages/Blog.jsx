import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero1.jsx';
import BlogsComp from '../components/Blogs/BlogsComp.jsx';
import Footer from '../components/Footer/Footer';

const Blog = () => {
  return (
    <div>
        <Navbar />
        <Hero />
      <BlogsComp />
      <Footer/>
    </div>
  )
}

export default Blog