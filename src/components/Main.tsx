import React from 'react';
import './main.css';
import { Descriptoin } from './Descriptoin';
import { Firstfloor } from './Firstfloor';
import { Header } from './Header';
import { Secondfloor } from './Secondfloor';
import { Footer } from './Footer';
import { Thirdfloor } from './Thirdfloor';

export function Main() {
  return (
    <div className='viewport-main all-content'>
      <Header/>
      <Descriptoin/>
      <Firstfloor/>
      <Secondfloor/>
      <Thirdfloor/>
      <Footer/>
    </div>
  );
}


