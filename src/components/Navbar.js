import React, { useContext } from 'react'
import styled from 'styled-components';
import TelegramIcon from '@mui/icons-material/Telegram';
import ToggleSwitch from './ToggleSwitch';
import { CryptoContext } from '../context/CryptoHolder';

const Container = styled.div`
    width: 100vw;
    height: 90px;
    padding: 20px 30px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  `
const Logo = styled.img`
  width: 65%;
  height: 65%;
  margin: 10px;
`
const Middle = styled.div`
height: 100%;
flex: 1;
display: flex;
align-items: center;
justify-content: center;
`
const SelectContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: center;
`
const Select = styled.select`
  padding: 6px 20px;
  font-weight: 600;
  background-color:#2e3241;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
`
const Option = styled.option``
const Right = styled.div`
height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 20px; 
`
const Button = styled.button`
  padding: 6px 20px;
  font-weight: 600;
  background-color:#2e3241;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
`
const ProgressCounter = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: cyan;
`
const TelegramButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  padding: 6px 20px;
  border-radius: 8px;
  border: none;
  background-color: #3dc6c1;
  color: white;
`


const Navbar = () => {
  const {cryptoList,setCryptoList,crypto,setCrypto} = useContext(CryptoContext);

  return (
    <Container>
        <Left>
          <Logo src='https://hodlinfo.com/static/media/HODLINFO_white.8f78fc06.png'/>
        </Left>
        <Middle>
          <SelectContainer>
              <Select>
                <Option selected>INR</Option> 
              </Select>
              <Select onChange={(e)=>{setCrypto(e.target.value)}}>
                {
                  cryptoList && cryptoList.map((item)=>{
                    return <Option value={item.base_unit} key = {item._id}>{item.base_unit.toUpperCase()}</Option>
                  })
                }
              </Select>
              <Button>BUY {crypto.toUpperCase()}</Button>
          </SelectContainer>
        </Middle>
        <Right>
           <ProgressCounter>
           </ProgressCounter>
           <TelegramButton><TelegramIcon style={{marginRight:"8px"}}/> Connect Telegram</TelegramButton>
           <ToggleSwitch/>
           
        </Right>
    </Container>
  )
}

export default Navbar