import styled from 'styled-components'

export const ResultsScreenContainer = styled.div`
    grid-column: 1/13;
    grid-row: 1/13;
    padding: 5em;
    display: flex;
    flex-direction: column;
    
    
    

`

export const OrderContainer = styled.div `
    
`

export const SingleResultList = styled.div `
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const FruitImage = styled.img `
    width: 30px;

`

export const SingleResultContainer = styled.div `
    font-size: 1.2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SingleAmount = styled.p `
    font-size: 1.2em;
`


export const TotalPrice = styled.p `
    margin: 0;
`

export const DiscountApplied = styled.p `
    margin: 0;
`

export const AllResultsContainer = styled.div `
    width: 80%;
    display: grid;
    grid-template-columns: 4fr 1fr 1fr;
`