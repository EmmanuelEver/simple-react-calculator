import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { clearAll, deleteChar, getResult, keyPress, operationPress } from '../store/actions/calculatorActions'
import Key from './Key'

const Keys = () => {
    const dispatch = useDispatch();
    const display = useSelector(state => state.calculator);

    const numHandler = val => dispatch(keyPress(val));
    const operationHandler = val => dispatch(operationPress(val));
    const deleteHandler = () => dispatch(deleteChar());
    const resetHandler = () => dispatch(clearAll());
    const equalHandler = val => {
        try{
            eval(display.expString);
            dispatch(getResult(eval(display.expString)));
        }
        catch(err) {
            alert("syntax error");
        }
    }
    
    return (
        <Wrapper>
            <Key spaceBottom clickHandler={() => numHandler(1)} val={1} size="small" keyType="key3" textColor="primary">1</Key>
            <Key spaceBottom clickHandler={() => numHandler(2)} val={2} size="small" keyType="key3" textColor="primary">2</Key>
            <Key spaceBottom clickHandler={() => numHandler(3)} val={3} size="small" keyType="key3" textColor="primary">3</Key>
            <Key spaceBottom clickHandler={() => deleteHandler()} val="DEL" size="small" keyType="key1" textColor="neutral">DEL</Key>
            <Key spaceBottom clickHandler={() => numHandler(4)} val={4} size="small" keyType="key3" textColor="primary">4</Key>
            <Key spaceBottom clickHandler={() => numHandler(5)} val={5} size="small" keyType="key3" textColor="primary">5</Key>
            <Key spaceBottom clickHandler={() => numHandler(6)} val={6} size="small" keyType="key3" textColor="primary">6</Key>
            <Key disabled={display.disableOperation} spaceBottom clickHandler={() => operationHandler("+")} val="+" size="small" keyType="key3" textColor="primary">+</Key>
            <Key spaceBottom clickHandler={() => numHandler(7)} val={7} size="small" keyType="key3" textColor="primary">7</Key>
            <Key spaceBottom clickHandler={() => numHandler(8)} val={8} size="small" keyType="key3" textColor="primary">8</Key>
            <Key spaceBottom clickHandler={() => numHandler(9)} val={9} size="small" keyType="key3" textColor="primary">9</Key>
            <Key disabled={display.disableOperation} spaceBottom clickHandler={() => operationHandler("-")} val="-" size="small" keyType="key3" textColor="primary">-</Key>
            <Key spaceBottom clickHandler={() => numHandler(".")} val="." size="small" keyType="key3" textColor="primary">.</Key>
            <Key spaceBottom clickHandler={() => numHandler(0)} val={0} size="small" keyType="key3" textColor="primary">0</Key>
            <Key disabled={display.disableOperation} spaceBottom clickHandler={() => operationHandler("/")} val="/" size="small" keyType="key3" textColor="primary">/</Key>
            <Key disabled={display.disableOperation} spaceBottom clickHandler={() => operationHandler("*")} val="*" size="small" keyType="key3" textColor="primary">&#215;</Key>
            <Key clickHandler={() => resetHandler()} keyType="key1" textColor="neutral">RESET</Key>
            <Key clickHandler={() => equalHandler()} keyType="key2" textColor="neutral">=</Key>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 1rem;
    width: 100%;
    flex: 1;
    background: ${({theme}) => theme.bgColor.bg2};
    border-radius: 8px;
    padding: 28px 24px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    transition: all .3s ease-in-out;

    @media screen and (max-width: 450px){
        padding: 20px 16px 20px;
    }
`

export default Keys;
