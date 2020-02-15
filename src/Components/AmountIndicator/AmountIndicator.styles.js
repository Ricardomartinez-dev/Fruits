import styled, { keyframes } from 'styled-components'


const down_up = keyframes`
    from { transform: translateY(100%) }
    to { transform: translateY(0) }
`


export const AmountIndicatorContainer = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-gap: 1em;
    padding: 1.2em;
    box-shadow: 0 4px 8px rgba(0, 0, 0, .6);
    background: whitesmoke;
    animation: ${down_up} 200ms forwards;
    position: relative; 

`

export const SelectedFruitContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FruitImage = styled.img`
    width: 35%;
    
    align-self: center;
`

export const FruitName = styled.p`
    font-size: 1.1em;
    font-weight: bolder;
    margin: 0;
`

export const AmountInputContainer = styled.div`
    align-self: center;
    
`


export const AcceptButtonContainer = styled.div`
    align-self: center;
`

export const BackButtonContainer = styled.div`
    position: absolute; 
    top: 2%; right: 2%;
    font-size: 1em;
    cursor: pointer;
`