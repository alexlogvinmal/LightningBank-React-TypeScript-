import React, { useState } from 'react';
import './orderform.css';

interface OrderProps{
  whatBank: string,
  numberBank:string,
  firstNumber:string,
  secondNumber:string,
  thirdNumber:string,
  cvvNumber:string 
  }

export function Orderform(props:OrderProps) {


 


  return (
  <div className='orderform'>
    <div className='form'>
      <div className='close'><button className='btn-close'>X</button></div>
      <div className='order-description'>A few steps and you will become a happy owner of our bank card just need to fill the fields below</div>
      <div className='info'>Your payment system is <i>{props.whatBank}</i></div>
      <div className='info'>Your unique card number is <i>{props.numberBank} {props.firstNumber} {props.secondNumber} {props.thirdNumber}</i></div>
      <div className='info'>The card will work until <i>December 2099</i></div>
      <div className='info'>Your unique CVV number is <i>{props.cvvNumber}</i></div>
      <div className='form-fill'>
        <div className='form-fil-el'>Name <input type="string"></input></div>
        <div className='form-fil-el'>Surname <input type="string"></input></div>
        <div className='form-fil-el'>Phone <input type="tel"></input></div>
      </div>
      <div className='form-fill'>
        <div className='form-fil-el'>Contry <input type="string"></input></div>
        <div className='form-fil-el'>City <input type="string"></input></div>
        <div className='form-fil-el'>Post adress <input type="string"></input></div>
      </div>
      <div className='btn-confirm'><button>Confirm</button></div>
    </div>

  </div>
  )
}
