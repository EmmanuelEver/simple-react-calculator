import React from 'react'
import styled from 'styled-components'

const MainWrapper = ({children}) => {
    return (
        <Main>
            {children}
        </Main>
    )
}

const Main = styled.main`
    width: 100vw;
    min-height: 100vh;
    background: ${({theme}) => theme.bgColor.bg1};
    display: grid;
    place-items: center;
    transition: all .3s ease-in-out;
`

export default MainWrapper;
