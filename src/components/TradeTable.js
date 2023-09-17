import React, { useContext, useEffect,useState } from "react";
import styled from "styled-components";
import { CryptoContext } from "../context/CryptoHolder";
import WazirXIcon from "../images/wazirxicon.png"

const Container = styled.div`
  padding: 0px 25px;
  margin-top: 30px;
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const Table = styled.table`
  width: 100%;
      border-collapse: collapse;
`;
const Image = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 10px;
`
const Tr = styled.tr`
    background-color: #${props=>props.bgcolor};
`;
const Th = styled.th`
  font-size: 24px;
  font-weight: 1500;
  color: #7b7e84;
  padding: 15px 12px;
  `;
const Td = styled.td`
  text-align: center;
  font-size: 24px;
  font-weight: 1000;
  color: white;
  padding: 15px 12px;
`;
const TradeTable = () => {
  const {cryptoList,crypto} = useContext(CryptoContext);
  const [last,setLast] = useState(null);
  const [sell,setSell] = useState(null);
  const [buy,setBuy] = useState(null);
  function numberWithCommas(x) {
    const num = parseInt(x);
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  useEffect(()=>{
    if(!cryptoList){
      return;
    }
    const newCrypto = cryptoList.find((item)=>{
      return item.base_unit == crypto;
    })
    setLast(newCrypto.last);
    setSell(newCrypto.sell);
    setBuy(newCrypto.buy);
  },[crypto,cryptoList])
  return (
    <Container>
      <Table>
        <Tr bgcolor = "191d28">
          <Th>#</Th>
          <Th>Platform</Th>
          <Th>Last Traded Price</Th>
          <Th>Buy / Sell Price</Th>
          <Th>Difference</Th>
          <Th>Savings</Th>
        </Tr>
        <Tr bgcolor = "2e3241">
          <Td>1</Td>
          <Td><Image src={WazirXIcon}/>WazirX</Td>
          <Td>₹ {numberWithCommas(last)}</Td>
          <Td>₹ {numberWithCommas(buy)} / ₹ {numberWithCommas(sell)}</Td>
          <Td style={{color: "#da5757"}}>-9.18 %</Td>
          <Td style={{color: "#da5757"}}>▼ ₹ 2,31,363</Td>
        </Tr>
      </Table>
    </Container>
  );
};

export default TradeTable;
