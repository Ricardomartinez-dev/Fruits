import React, { useState } from 'react'
import * as st from './FruitList.styles'

export const FruitList = props => {
    const [ImageRoutes] = useState([
        "aguacate.svg", "baya.svg", "guanabana.svg",
        "manzana.svg", "naranja.svg", "pera.svg",
        "platano.svg", "uva.svg", "sandia.svg",
        "maracuya.svg", "limon.svg", "mango.svg",
        "durazno.svg", "fresa.svg"
    ])

    const ReturnFruitImageList = () =>
        ImageRoutes.map(route => {
            let name = route.split(".")[0]
            return (
                <st.SingleItemContainer key={route} onClick={() => props.PlaceAmountModal(name)}>
                    <st.FruitImage src={require(`../../Assets/${route}`)} />
                    <st.FruitName> {name.charAt(0).toUpperCase() + name.slice(1)} </st.FruitName>
                </st.SingleItemContainer>
            )
        });


    const ReturnFruitImageListFiltered = () =>
        ImageRoutes.filter(x => x.toLowerCase().includes(props.filter.toLowerCase())).map(route => {
            let name = route.split(".")[0]
            return (
                <st.SingleItemContainer key={route} onClick={() => props.PlaceAmountModal(name)}>
                    <st.FruitImage src={require(`../../Assets/${route}`)} />
                    <st.FruitName> {name.charAt(0).toUpperCase() + name.slice(1)} </st.FruitName>
                </st.SingleItemContainer>
            )
        });



    return (
        <st.FruitListContainer>
            {!props.filter ? ReturnFruitImageList() : ReturnFruitImageListFiltered()}
        </st.FruitListContainer>
    )
}