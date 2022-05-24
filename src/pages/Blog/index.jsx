import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';
import Contact from '../../components/Home/Contact';
import CommnetBox from '../../components/Home/CommnetBox';
const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className='blog-goBack' to='/'>
        Geri dön
      </Link>
      {blog ? (
        <div className='blog-wrap'>

          <img src={blog.cover} alt='cover' />
          <header>
            <h1>{blog.title}</h1>
          </header>
          <p className='blog-date'>{blog.createdAt}</p>
          <p className='blog-desc'>{blog.description}</p>
          <div className='view'>
              <i class="gg-eye"></i><span>{blog.view}</span>

          </div>

      
          <CommnetBox/>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
