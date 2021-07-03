import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Panel = () => {
    const display = useSelector((state) => state.calculator);

    const getSub = () => {
        if(display.result) return display.expString;
        try{
            eval(display.expString)
            return eval(display.expString)
        }
        catch(err) {
            return(display.expString)
        }
    }

    return (
        <Wrapper>
            <Screen>
                <SubString>
                    {
                        getSub()
                    }
                </SubString>
                <MainString>
                    {
                        display?.result? display.result : display.expString
                    }
                </MainString>
            </Screen>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    margin-top: 32px;
    width: 100%;
    height: 110px;
    padding: 28px 32px 36px;
    background: ${({theme}) => theme.bgColor.screen};
    border-radius: 8px;
    transition: all .3s ease-in-out;
    @media screen and (max-width: 450px){
        padding: 20px 16px 24px;
        height: 80px;
    }
`
const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
`
const MainString = styled.h3`
    margin-top: .4rem;
    line-height: 1;
    text-align: right;
    font-size: 1.1rem;
    white-space: nowrap;
    color: ${({theme}) => theme.textColor.panelMain};
    @media screen and (max-width: 450px){
        margin-top: .2rem;
        font-size: .8rem;
    }
`
const SubString = styled.p`
    line-height: 1;
    text-align: right;
    font-size: .5rem;
    color: ${({theme}) => theme.textColor.header};
    @media screen and (max-width: 450px){
        margin-top: 2px;
        font-size: .4rem;
    }
`

export default Panel
