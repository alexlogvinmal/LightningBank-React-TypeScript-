import React, { useEffect, useState } from 'react';
import './thirdfloor.css';


export function Thirdfloor() {
    
    let [SumValue, setSumValue] = useState(500000);
    let [MinpValue, setMinpValue] = useState(20000);
    let [TermValue, setTermValue] = useState(36);
    let [PercentValue, setPercentValue] = useState(44.25);
    let [PercentMain, setPercentMain] = useState(99.47);
    let [SumMain, setSumMain] = useState(997330.39);
    let [DifMain, setDifMain] = useState(497330.39);


    function TestSumValue(event:any){
        if(event.target.value=='0'){
            setSumValue(2500)
            setMinpValue(100)
        }else if(event.target.value=='1'){
            setSumValue(5000)
            setMinpValue(200)
        }else if(event.target.value=='2'){
            setSumValue(10000)
            setMinpValue(400)
        }else if(event.target.value=='3'){
            setSumValue(20000)
            setMinpValue(800)
        }else if(event.target.value=='4'){
            setSumValue(50000)
            setMinpValue(2000)
        }else if(event.target.value=='5'){
            setSumValue(80000)
            setMinpValue(3200)
        }else if(event.target.value=='6'){
            setSumValue(100000)
            setMinpValue(4000)
        }else if(event.target.value=='7'){
            setSumValue(150000)
            setMinpValue(6000)
        }else if(event.target.value=='8'){
            setSumValue(200000)
            setMinpValue(8000)
        }else if(event.target.value=='9'){
            setSumValue(300000)
            setMinpValue(12000)
        }else if(event.target.value=='10'){
            setSumValue(400000)
            setMinpValue(16000)
        }else if(event.target.value=='11'){
            setSumValue(500000)
            setMinpValue(20000)
        }
    }
    function TestTermValue(event:any){
        if(event.target.value=='0'){
            setTermValue(3)
            setPercentValue(44.29)
            setPercentMain(9.45)
        }else if(event.target.value=='1'){
            setTermValue(6)
            setPercentValue(44.27)
            setPercentMain(18.87)
        }else if(event.target.value=='2'){
            setTermValue(9)
            setPercentValue(44.26)
            setPercentMain(28.04)
        }else if(event.target.value=='3'){
            setTermValue(12)
            setPercentValue(44.26)
            setPercentMain(36.67)
        }else if(event.target.value=='4'){
            setTermValue(18)
            setPercentValue(44.26)
            setPercentMain(53.8)
        }else if(event.target.value=='5'){
            setTermValue(24)
            setPercentValue(44.25)
            setPercentMain(69.77)
        }else if(event.target.value=='6'){
            setTermValue(36)
            setPercentValue(44.25)
            setPercentMain(99.47)
        }
    }
    
    function MainCalculator(percent:number, sum:number){
        let dif = +(sum * (percent/100)).toFixed(2);
        let allsum = sum + dif;
        setDifMain(dif);
        setSumMain(allsum);
    }
    useEffect(()=>MainCalculator(PercentMain,SumValue));
    

    return (
        <div className='thirdfloor'>
            <div className='description-style'>Only in our bank you can take a loan up to <i>500 000</i>$</div>
            <div className='thirdfloor-content1'>
                <div className='calculator'>
                    <div className='description-style'><b>Credit calculator</b></div>
                    <div>
                        <div className='word-style'>Sum</div>
                        <div><b>{SumValue}</b></div>
                        <div>
                            <input type='range' step='1' min='0' max='11' onChange={TestSumValue}/>
                        <div className='input-ds'>
                            <div>2 500 $</div>
                            <div>500 000 $</div>
                        </div>    
                        </div>

                    </div>
                    <div>
                        <div className='word-style'>Term</div>
                        <div><b>{TermValue} months</b></div>
                        <input type='range' step='1' min='0' max='6' onChange={TestTermValue}/>
                        <div className='input-ds'>
                            <div>3 m</div>
                            <div>36 m</div>
                        </div>
                    </div>
                </div>
                <div className='calc-info'>
                    <div className='info-calc-st'>General expenses</div>
                    <div className='calc-value-m'><b>{DifMain} $</b></div>
                    <hr></hr>
                    <div className='word-style info-calc-st'>Minimum payment</div>
                    <div className='calc-value-etc'><b>{MinpValue} $</b></div>
                    <div className='word-style info-calc-st'>Total cost of the loan</div>
                    <div className='calc-value-etc'><b>{SumMain} $</b></div>
                    <div className='word-style info-calc-st'>Real annual interest rate</div>
                    <div className='calc-value-etc'><b>{PercentValue} %</b></div>
                </div>
            </div>
            <div className='thirdfloor-description'>
                The calculation is approximate, has an informational nature and is based on the assumption that the client<br /> makes a credit transaction at the point of sale.<br />
                The minimum loan amount is $ 1,000.<br />
                The maximum loan amount is $ 500,000.<br />
                The minimum term of the loan is not established.<br />
                The maximum loan term is 25 years</div>
        </div>
    );
}