import React from 'react'
import styled from 'styled-components';

const Key = ({children, size, keyType, textColor, spaceBottom, clickHandler, disabled}) => {
    return (
        <Wrapper disabled={disabled} onClick={() => clickHandler()} size={size} keyType={keyType} spaceBottom={spaceBottom}>
            <SpanText textColor={textColor}>
                {children}
            </SpanText>
        </Wrapper>
    )
}

const Wrapper = styled.button`
    padding: 20px 0 20px;
    width: ${({size}) => size === "small" ? "22.5%" : "48%"};
    background: ${({theme,keyType}) => theme.keyColor[keyType].bg };
    border: none;
    border-bottom: 6px inset ${({theme,keyType}) => theme.keyColor[keyType].borderColor };
    border-radius: 8px;
    display: grid;
    place-items: center;
    margin-bottom: ${({spaceBottom}) => spaceBottom ? ".5rem" : 0};
    outline: none;
    cursor: pointer;
    transition: all .15s ease-in-out;

    &:active {
        transform: ${({disabled}) => !disabled && "translateY(4px)"};
        border-bottom: 2px inset #222;
    }
`

const SpanText = styled.span`
    font-size: .7rem;
    font-weight: 700;
    text-align: center;
    line-height: 1;
    margin-bottom: -4px;
    color: ${({theme,textColor}) => textColor === "secondary" ? theme.textColor.secondary : theme.textColor[textColor] };
    transition: all .3s ease-in-out;
    pointer-events: none;
`


const MemoizedKey = React.memo(Key);
export default MemoizedKey;