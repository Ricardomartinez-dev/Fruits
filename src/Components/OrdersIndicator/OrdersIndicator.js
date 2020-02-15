import React, { useEffect, useState, useContext } from 'react'
import * as st from './OrdersIndicator.styles'
import { Icon } from 'antd'
import Axios from 'axios'
import Context from '../../Global/Context'
import { navigate } from '@reach/router'

export const OrdersIndicator = () => {
    const { state } = useContext(Context)
    const [AmountOfOrders, setAmountOfOrders] = useState(null)

    useEffect(() => {
        BringAmountOfOrders()
    }, [state.orders])

    const BringAmountOfOrders = () => {
        Axios.get("http://localhost:2486/data")
            .then(res => setAmountOfOrders(res.data.length))
            .catch(err => console.log(err))
    }

    return (
        <st.OrdersIndicatorContainer onClick={() => navigate('results')}>
            <st.Title> Pedidos hechos </st.Title>
            <Icon type='bell' style={{fontSize: '2em'}} />
            <st.Length> {AmountOfOrders} </st.Length>
        </st.OrdersIndicatorContainer>
    )
    
}