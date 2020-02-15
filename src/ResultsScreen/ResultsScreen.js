import React, { useEffect, useState  } from 'react'
import * as st from './ResultsScreen.styles'
import Axios from 'axios'

export const ResultsScreen = () => {
    const [LocalData, setLocalData] = useState([])


    useEffect(() => {
        GetAllData()
    }, [])


    const GetAllData = () => {
        Axios.get('http://localhost:2486/data')
            .then(res => setLocalData(res.data))
            .catch(err => console.error(err))
    }

    const ReturnListOfFruitsInOrder = fruit_list => 
        <st.AllResultsContainer>
            <st.SingleResultList>
            {
                fruit_list.fruits.map((fruit, index) =>
                <st.SingleResultContainer>
                    <st.FruitImage key={index} src={require(`../Assets/${fruit}.svg`)} />  
                    <st.SingleAmount> {fruit_list.amounts[index]} </st.SingleAmount>
                </st.SingleResultContainer>  
                )
            }
            </st.SingleResultList>
            <st.TotalPrice> Precio:  ${fruit_list.final_price} </st.TotalPrice>
            <st.DiscountApplied> Descuento:  {fruit_list.discount_applied ? "10%" : "0%"} </st.DiscountApplied>
        </st.AllResultsContainer>
    
    


    const ReturnListOfOrdersMade = () => 
        LocalData.map((order, index) => 
            <st.OrderContainer key={index}>
                { ReturnListOfFruitsInOrder(order) }
            </st.OrderContainer>
        )
    
    
    
    return (
        <st.ResultsScreenContainer>
            { ReturnListOfOrdersMade() }
        </st.ResultsScreenContainer>
    )
}