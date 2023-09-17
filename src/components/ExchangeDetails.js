import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 248px;
    display: flex;
    padding: 0px 20px;
    justify-content: space-around;
`
const PercentageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Percentage = styled.h1`
    font-size: 40px;
    color: #3dc6c1;
`
const PercentageInfo = styled.span`
    color: #7b7e84;
    font-size: 20px;
`

const ExchangeContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const Heading = styled.h1`
    font-size: 28px;
    color: #7b7e84;
`
const Amount = styled.h1`
    font-size: 80px;
    color: white;
`
const Info = styled.span`
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    color: #7b7e84;
`


const ExchangeDetails = () => {
  return (
    <Container>
        <PercentageContainer>
            <Percentage>0.4 %</Percentage>
            <PercentageInfo>5 Mins</PercentageInfo>
        </PercentageContainer>
        <PercentageContainer>
            <Percentage>1.09 %</Percentage>
            <PercentageInfo>1 Hour</PercentageInfo>
        </PercentageContainer>
        <ExchangeContainer>
            <Heading>Best Price to Trade</Heading>
            <Amount>₹ 24,14,930</Amount>
            <Info>Average BTC/INR net price including commission</Info>
        </ExchangeContainer>
        <PercentageContainer>
            <Percentage>4.57 %</Percentage>
            <PercentageInfo>1 Day</PercentageInfo>
        </PercentageContainer>
        <PercentageContainer>
            <Percentage>12.07 %</Percentage>
            <PercentageInfo>7 Days</PercentageInfo>
        </PercentageContainer>  
    </Container>
  )
}

export default ExchangeDetails