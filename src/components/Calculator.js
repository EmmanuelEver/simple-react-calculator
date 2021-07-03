import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Keys from './Keys'
import Panel from './Panel'

const Calculator = () => {

    

    return (
        <>
            <Wrapper>
                <Header/>
                <Panel/>
                <Keys/>
            </Wrapper>
            <Copyright>
                Design by <LinkTag href="https://www.frontendmentor.io/">frontendmentor.io</LinkTag>, Coded by <LinkTag href="https://emmanueltelewik.netlify.app/">@dalbong</LinkTag>
            </Copyright>
        </>
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

const Copyright = styled.div`
    font-size: .3rem;
    text-align: center;
    color: ${({theme}) => theme.textColor.header};
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-bottom: .3rem;
`

const LinkTag = styled.a`
    color: ${({theme}) => theme.keyColor.key2.bg};
    text-decoration: none;
`

export default Calculator
