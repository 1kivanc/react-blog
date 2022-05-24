import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    cover,
    id,
    view,
  },
}) => {

  return (
    <Link className='blogItem-link' to={`/blog/${id}`}>
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <div className='views'>
        <i class="gg-eye"></i><span>{view}</span>
        </div>
      </footer>
    </div>
    </Link>


  );
};

export default BlogItem;
