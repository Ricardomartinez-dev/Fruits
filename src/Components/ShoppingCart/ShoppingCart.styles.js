import styled from 'styled-components'


export const ShoppingCartContainer = styled.div `
    grid-column: 6/11;
    grid-row: 1/10;
    width: 100%;
    height: 100%;
    padding: 1.5em;

`

export const OrderItem = styled.div `
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    box-shadow: 0 4px 8px rgba(0, 0, 0, .2);
    padding: .6em .4em;
    position: relative;
`

export const OrderItemImage = styled.img `
    width: 55%;
    justify-self: center;
`

export const ShoppingCartTitle = styled.div `
    font-size: 1.5em;
    display: flex;
    margin-bottom: 2em;
`

export const OrderItemAmount = styled.p `
    margin: 0;
    align-items : center;
    margin: 1em 0 0 2em;
`

export const OrderItemName = styled.p `
    margin: 0;
    justify-self: center;
`

export const OrderProductsListContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
`

export const SendOrderButton = styled.div`
    background: steelblue; 
    border-radius: 4px;
    font-size: .7em;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1em;
    padding: .1em .4em .5em .4em;
    height: 1.2em;    
    align-self: center;
    cursor: pointer;
`

export const RemoveButton = styled.div `
    position: absolute;
    right: 1%; top: 1%;
    cursor: pointer;
`

export const SubTotal = styled.p `
    color: #323232;
    margin: 0 0 0 1.5em;
`