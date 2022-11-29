import React, { useState } from 'react';
import './firstfloor.css';

export function Firstfloor() {

    let [switchColorFront, setswitchColorFront] = useState('box-front box-color-white');
    let [switchColorBack, setswitchColorBack] = useState('box-back box-color-white');
    
    function changeColorToWhite(event:any){
        setswitchColorFront('box-front box-color-white');
        setswitchColorBack('box-back box-color-white')
    }
    function changeColorToBlack(event:any){
        setswitchColorFront('box-front box-color-black');
        setswitchColorBack('box-back box-color-black')
    }
    function changeColorToBlue(event:any){
        setswitchColorFront('box-front box-color-blue');
        setswitchColorBack('box-back box-color-blue')
    }

    let [inputFirst, setinputFirst] = useState('4141');
    function changeFirst(event:any) { 
        if(event.target.value.length==4){
            setinputFirst(event.target.value); 
        }
    }

    let [inputSecond, setinputSecond] = useState('2561');
    function changeSecond(event:any) { 
        if(event.target.value.length==4){
            setinputSecond(event.target.value); 
        }
    }

    let [inputThird, setinputThird] = useState('1094');
    function changeThird(event:any) { 
        if(event.target.value.length==4){
            setinputThird(event.target.value); 
        }
    }

    let [inputBankNumber, setBankNumber] = useState('5375');
    let [whatBank, setwhatBank] = useState('MasterCard');
    function changeBankToVisa(event:any){
        setBankNumber('4149');
        setwhatBank('Visa')
    }
    function changeBankToMCard(event:any){
        setBankNumber('5375');
        setwhatBank('MasterCard')
    }


    let [inputCvv, setCvv] = useState('777');
    function changeCvv(event:any) { 
        if(event.target.value.length==3){
            setCvv(event.target.value);
        }
    }

    return (
        <div>
            <div className='firstfloor-content'>
                Only in our bank you can create a card completely for yourself
            </div>
            <div className='firstfloor-content1'>
                <div className='firstfloor-content2 box'>
                    <div className="box-inner">
                        <div className={switchColorFront}>
                            <div className="name-tag"><h5><i >LightningBank</i> | <small>Universal Bank</small></h5></div>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                            <div className="card-tag">{inputBankNumber}&nbsp;&nbsp;{inputFirst}&nbsp;&nbsp;{inputSecond}&nbsp;&nbsp;{inputThird}</div>
                            <div className="card-data-tag">12/99</div> 
                            <div className="card-bank-tag">{whatBank}</div> 
                        </div>
                        <div className={switchColorBack}>
                            <div className='card-line'>&nbsp;</div>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                            <div className="card-ccv"><small>{inputCvv}</small></div> 
                        </div>
                    </div>
                </div>


                <div className='firstfloor-content3'>
                    <div>Chose color : </div>
                    <button className='button-black' onClick={changeColorToBlack}></button><button className='button-white' onClick={changeColorToWhite}></button><button className='button-blue' onClick={changeColorToBlue}></button>
                    <div>&nbsp;</div>
                    <div>Chose type : </div>
                    <button className='word-style' onClick={changeBankToVisa}>Visa</button><button className='word-style' onClick={changeBankToMCard}>Mastercard</button>
                    <div>&nbsp;</div>
                    <div className='word-style'>Create your unique number : </div>
                    <input className='input-number' type="number" onInput={changeFirst}/><input className='input-number' type="number" onInput={changeSecond}/><input className='input-number' type="number" onInput={changeThird}/>
                    <div>&nbsp;</div>
                    <div className='word-style'>Create your unique CVV : </div>
                    <input className='input-cvv' onInput={changeCvv}></input>
                    <div>&nbsp;</div>
                    <button className='button-go-to-order'>Go to order</button>
                </div>
            </div>

        </div>
    );
}