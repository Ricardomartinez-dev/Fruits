import styled from 'styled-components'

export const OrdersIndicatorContainer = styled.div `
    position: relative; 
    position: absolute;
    top: 2%;
    right: 2%;
    display: flex;
    padding: 1em;
    box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
    cursor: pointer;
`

export const Title = styled.p `
    font-size: 1.4em;
    margin: 0 1em 0 0;
`

export const Length = styled.p `
    width: 20px;
    height: 20px;
    position: absolute; 
    bottom : -15%;
    right: 0;
    padding: .2em;
    background: tomato;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`