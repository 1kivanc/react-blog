import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Authors = () => (
  <authors className='home-Authors'>
    
  <div className="Authors">
    <h1>Yazarlar</h1>
    <hr />

    <Link to={'/Profile'}>
    <div className="profile">
      <img src="assets/images/profilePhoto.png" alt="" />
      <h3 className='authorName'>Admin</h3>
      <p>Unity Game Developer(junior)</p>
    </div>
    </Link>
    <Link to="/Profile">    
    <div className="profile">
      <img src="assets/images/profilePhoto.png" alt="" />
      <h3 className='authorName'>Kıvanç</h3>
      <p>Frontend Developer(junior)</p>
    </div>
    </Link>
    <Link to={'/Profile'}>
    <div className="profile">
      <img src="assets/images/profilePhoto.png" alt="" />
      <h3 className='authorName'>Lorem Bot</h3>
      <p>Full time lorembot</p>
    </div>
    </Link>

  </div>
      
  </authors>
);

export default Authors;
