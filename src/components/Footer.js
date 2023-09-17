import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-top: auto;
    border-top: 2px solid #7b7e84;
    display: flex;
    justify-content: space-between;
    padding: 13px;
`
const CopyrightInfo = styled.div``
const Copyright = styled.span`
    color: #7b7e84;
    font-size: 12px;
` 
const SupportInfo = styled.div`
`
const Support = styled.a`
    font-size: 12px;
    color: #7b7e84;
    cursor: pointer;
    text-decoration: none;
    &:focus {
        text-decoration: none;
    }
    &:active {
        text-decoration: none;
    }
`
const Footer = () => {
  return (
    <Container>
        <CopyrightInfo>
            <Copyright>Copyright © 2019 HodlInfo.com</Copyright>
        </CopyrightInfo>
        <SupportInfo>
            <Support href='#'>Support</Support>
        </SupportInfo>
    </Container>
  )
}

export default Footer