import React from 'react'
import styled from 'styled-components';
import ExchangeDetails from '../components/ExchangeDetails';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TradeTable from '../components/TradeTable';
import BottomFooter from '../components/BottomFooter';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Home = () => {
  return (
      <>
        <Container>
          <Navbar/>
          <ExchangeDetails/>
          <TradeTable/>
          <Footer/>
          <BottomFooter/>
        </Container>
      </>
  )
}

export default Home