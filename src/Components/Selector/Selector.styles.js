import styled from 'styled-components'

export const MainSelectorContainer = styled.div`
    grid-column: 2/6;
    grid-row: 1/13;
    width: 100%;
    height: 100%;
    /* background: red; */
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
    padding: 1.5em;
`

export const Title = styled.p`
    font-size: 1.5em;
`

export const InputContainer = styled.div`
    grid-column: 1/13;
    grid-row: 1/3;
`

export const ListContainer = styled.div`
    grid-column: 1/13;
    grid-row: 4/12;
`

export const AmountIndicatorContainer = styled.div`
    grid-column: 1/13;
    grid-row: 11/13;
`