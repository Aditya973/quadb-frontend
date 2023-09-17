import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    height: 50px;
    margin-top: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Button = styled.button`
    color: #17a2b8;
    background-color: transparent;
    border: 1px solid #17a2b8;
    border-radius: 5px;
    font-size: 16px;
    padding: 8px 12px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    &:hover {
        background-color: #17a2b8;
        color: white;
        transition: 0.5s;
    }
`

const BottomFooter = () => {
  return (
    <Container>
        <Button>Add hodlinfo to home screen</Button>
    </Container>
  )
}

export default BottomFooter