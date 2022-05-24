import React, { useState } from 'react';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';


import Authors from '../../components/Home/Authors';
import Footer from '../../components/Home/Footer';



import { blogList } from '../../config/data';
import Contact from '../../components/Home/Contact';



const Home = () => {
  const [blogs] = useState(blogList);
  
  


  return (
    <div>
      <Header/>
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
      <Authors/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
