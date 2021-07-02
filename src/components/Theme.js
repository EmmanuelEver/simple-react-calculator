import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux';
import GlobalStyles from '../styles/GlobalStyles';
import AppTheme from '../styles/themes';

const Theme = ({children}) => {
    const theme = useSelector(state => state.theme);

    useEffect(() => {
        window.localStorage.setItem("theme", theme.theme);
    }, [theme])
    return (
        <>
            <GlobalStyles/>
            <ThemeProvider theme={AppTheme[theme.theme]}>
                {children}
            </ThemeProvider>
        </>
    )
}

export default Theme;
