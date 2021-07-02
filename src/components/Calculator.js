import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Keys from './Keys'
import Panel from './Panel'

const Calculator = () => {

    

    return (
        <Wrapper>
            <Header/>
            <Panel/>
            <Keys/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    max-width: 500px;
    padding: 36px 28px 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media screen and (max-width: 450px){
        padding: 24px 20px 28px;
        max-width: 100vw;
    }
`

export default Calculator
