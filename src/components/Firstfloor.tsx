import React, { useState } from 'react';
import { Ordersend } from './Ordersend';
import './firstfloor.css';
import './orderform.css';




export function Firstfloor() {

    let [switchColorFront, setswitchColorFront] = useState('box-front box-color-white');
    let [switchColorBack, setswitchColorBack] = useState('box-back box-color-white');

    function changeColorToWhite(event: any) {
        setswitchColorFront('box-front box-color-white');
        setswitchColorBack('box-back box-color-white')
    }
    function changeColorToBlack(event: any) {
        setswitchColorFront('box-front box-color-black');
        setswitchColorBack('box-back box-color-black')
    }
    function changeColorToBlue(event: any) {
        setswitchColorFront('box-front box-color-blue');
        setswitchColorBack('box-back box-color-blue')
    }

    let [inputFirst, setinputFirst] = useState('4141');
    function changeFirst(event: any) {
        if (event.target.value.length == 4) {
            setinputFirst(event.target.value);
        } else if (event.target.value.length > 4) {
            alert('this column can have only 4 numbers')
            event.target.value = '';
            setinputFirst('4141');
            inputFirst = '4141'
        }
    }

    let [inputSecond, setinputSecond] = useState('2561');
    function changeSecond(event: any) {
        if (event.target.value.length == 4) {
            setinputSecond(event.target.value);
        } else if (event.target.value.length > 4) {
            alert('this column can have only 4 numbers')
            event.target.value = '';
            setinputSecond('2561');
            inputSecond = '2561'
        }
    }

    let [inputThird, setinputThird] = useState('1094');
    function changeThird(event: any) {
        if (event.target.value.length == 4) {
            setinputThird(event.target.value);
        } else if (event.target.value.length > 4) {
            alert('this column can have only 4 numbers')
            event.target.value = '';
            setinputThird('1094');
            inputThird = '1094'
        }
    }

    let [inputBankNumber, setBankNumber] = useState('5375');
    let [whatBank, setwhatBank] = useState('MasterCard');
    function changeBankToVisa(event: any) {
        setBankNumber('4149');
        setwhatBank('Visa')
    }
    function changeBankToMCard(event: any) {
        setBankNumber('5375');
        setwhatBank('MasterCard')
    }


    let [inputCvv, setCvv] = useState('777');
    function changeCvv(event: any) {
        if (event.target.value.length == 3) {
            setCvv(event.target.value);
        } else if (event.target.value.length > 3) {
            alert('CVV can have only 3 numbers')
            event.target.value = '';
            setCvv('777');
            inputCvv = '777'
        }
    }
    const [statusOrder, setStatusOrder] = useState(false);
    const [statusSend, setStatusSend] = useState(true);
    function OrderSend(){
        setStatusSend(prev=>false)
        setTimeout(()=> setStatusOrder(prev=>false),4000)
        setTimeout(()=> setStatusSend(prev=>true),4000)
        
    }


    return (
        <div>
            {statusOrder ? <div className='orderform'>
                <div className='form'>
                {statusSend ? '' : <Ordersend/> }
                    <div className='close'><button className='btn-close black-btn' onClick={() => setStatusOrder(prev => false)}>X</button></div>
                    <div className='order-description'>A few steps and you will become a happy owner of our bank card just need to fill the fields below</div>
                    <div className='info'>Your payment system is <i>{whatBank}</i></div>
                    <div className='info'>Your unique card number is <i>{inputBankNumber} {inputFirst} {inputSecond} {inputThird}</i></div>
                    <div className='info'>The card will work until <i>December 2099</i></div>
                    <div className='info'>Your unique CVV number is <i>{inputCvv}</i></div>
                    <div className='form-fill'>
                        <div className='form-fil-el'>Name <input type="string" required></input></div>
                        <div className='form-fil-el'>Surname <input type="string"></input></div>
                        <div className='form-fil-el'>Phone <input type="tel"></input></div>
                    </div>
                    <div className='form-fill'>
                        <div className='form-fil-el'>Contry <input type="string"></input></div>
                        <div className='form-fil-el'>City <input type="string"></input></div>
                        <div className='form-fil-el'>Post adress <input type="string"></input></div>
                    </div>
                    <div className='btn-confirm'><button className='black-btn' onClick={OrderSend}>Confirm</button></div>
                </div>

            </div> : ''}
            <div className='firstfloor-content description-style'>
                Only in our bank you can create a card completely for yourself
            </div>
            <div className='firstfloor-content1'>
                <div className='firstfloor-content2 box'>
                    {statusOrder ? '' : <div className='box-inner'>
                        <div className={switchColorFront}>
                            <div className="name-tag"><h5><i >LightningBank</i> | <small>Universal Bank</small></h5></div>
                            <div className='vhiden'>&nbsp;</div>
                            <div>&nbsp;</div>
                            <div className="card-tag">{inputBankNumber}&nbsp;&nbsp;{inputFirst}&nbsp;&nbsp;{inputSecond}&nbsp;&nbsp;{inputThird}</div>
                            <div className="card-data-tag">12/99</div>
                            <div className="card-bank-tag">{whatBank}</div>
                        </div>
                        <div className={switchColorBack}>
                            <div className='card-line'>&nbsp;</div>
                            <div className='vhiden'>&nbsp;</div>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                            <div className="card-ccv"><small>{inputCvv}</small></div>
                        </div>
                    </div>}
                </div>


                <div className='firstfloor-content3'>
                    <div>Chose color : </div>
                    <button className='button-black' onClick={changeColorToBlack}></button><button className='button-white' onClick={changeColorToWhite}></button><button className='button-blue' onClick={changeColorToBlue}></button>
                    <div>&nbsp;</div>
                    <div>Chose type : </div>
                    <button className='word-style black-btn' onClick={changeBankToVisa}>Visa</button><button className='word-style black-btn' onClick={changeBankToMCard}>Mastercard</button>
                    <div>&nbsp;</div>
                    <div className='word-style'>Create your unique number : </div>
                    <input className='input-number' type="number" onInput={changeFirst} /><input className='input-number' type="number" onInput={changeSecond} /><input className='input-number' type="number" onInput={changeThird} />
                    <div>&nbsp;</div>
                    <div className='word-style'>Create your unique CVV : </div>
                    <input className='input-cvv' onInput={changeCvv}></input>
                    <div>&nbsp;</div>
                    <button className='button-go-to-order black-btn' onClick={() => setStatusOrder(prev => true)}>Go to order</button>
                </div>
            </div>

        </div>
    );
}
