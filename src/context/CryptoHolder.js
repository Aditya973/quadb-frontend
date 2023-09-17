import React, { useEffect } from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { SERVER_URL } from '../config/shared';

const CryptoContext = createContext();

export default function CryptoHolder(props){
    const url = SERVER_URL + 'api/tickers';
    const [cryptoList,setCryptoList] = useState(null);
    const [crypto, setCrypto] = useState('btc');
    useEffect(()=>{
        fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            setCryptoList(data.data);
        })
    },[]);
    // useEffect(()=>{
    //     if(!cryptoList){
    //         return;
    //     }
    //     setLast(cryptoList[0].last);
    //     setSell(cryptoList[0].sell);
    //     setBuy(cryptoList[0].buy);
    // },[cryptoList])
    return(
        <CryptoContext.Provider value={{cryptoList,setCryptoList,crypto,setCrypto}}>
            {props.children}
        </CryptoContext.Provider>
    )
}

export {CryptoContext};