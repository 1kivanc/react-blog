import React from 'react';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';
import Text from '../../components/About/Text';
import Header from '../../components/Home/Header';
import Banner from '../../components/Home/Banner';

const About = () => {
    return (
        <>
         <Header/>
         <Banner/>
          <Text/>
         
        </>
      );
};

export default About;