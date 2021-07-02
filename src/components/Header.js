import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { change_theme } from '../store/actions/themeActions'

const Header = () => {
    const dispatch = useDispatch()
    const changeTheme = () => {
        dispatch(change_theme());
    }

    return (
        <Wrapper>
            <HeaderText>Calc</HeaderText>
            <Toggler>
                <SpanText>
                    Theme
                </SpanText>
                <ToggleWrapper>
                    <ToggleLabel>
                        <SpanText>
                            1
                        </SpanText>
                        <SpanText>
                            2
                        </SpanText>
                        <SpanText>
                            3
                        </SpanText>
                    </ToggleLabel>
                        <Toggle>
                            <ToggleButton onClick={changeTheme}/>
                        </Toggle>
                </ToggleWrapper>
            </Toggler>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const HeaderText= styled.h1`
    text-align: left;
    font-weight: bold;
    line-height: 1;
    font-size: 1rem;
    color: ${({theme}) => theme.textColor.header};
    transition: all .3s ease-in-out;
    @media screen and (max-width: 450px){
        font-size: .8rem;
    }
`

const Toggler = styled.div`
    display: flex;
    align-items: center;
`
const SpanText = styled.span`
    font-size: .4rem;
    font-weight: 700;
    color: ${({theme}) => theme.textColor.header};
    transition: all .3s ease-in-out;
    line-height: 1;
    @media screen and (max-width: 450px){
        font-size: .35rem;
    }
`
const ToggleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: .75rem;
    margin-top: -.75rem;
`

const ToggleLabel = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 .25rem;
`

const Toggle = styled.div`
    margin-top: .25rem;
    width: 2.3rem;
    height: 1rem;
    padding: 4px;
    display: flex;
    align-items: center;
    border-radius: 20px;
    background: ${({theme}) => theme.bgColor.bg2};
    transition: all .3s ease-in-out;
    @media screen and (max-width: 450px){
        width: 1.7rem;
        height: .8rem;
    }
`
const ToggleButton = styled.span`
    border: none;
    height: .7rem;
    width: .7rem;
    border-radius: 50%;
    background: ${({theme,keyType}) => theme.keyColor.key2.bg };
    transition: all .3s ease-in-out;
    transform: translateX(0%);
    transform: ${({theme}) => theme.themeName === "theme2" && "translateX(100%)"};
    transform: ${({theme}) => theme.themeName === "theme3" && "translateX(200%)"};
    cursor: pointer;
    @media screen and (max-width: 450px){
        width: .6rem;
        height: .6rem;
    }
`

export default Header;