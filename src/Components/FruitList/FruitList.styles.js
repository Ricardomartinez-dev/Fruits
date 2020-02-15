import styled from 'styled-components'

export const FruitListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1em;
`

export const SingleItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, .4);
    height: 5em;
    cursor: pointer;
    transition: linear 150ms;
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 10px rgba(0, 0, 0, .6);

    }
`

export const FruitImage = styled.img`
    width: 20%;
`

export const FruitName = styled.p`
    font-size: 1.1em;
    font-weight: bolder;
    margin: 0;
`