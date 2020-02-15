import React, { useContext, useState } from 'react'
import * as st from './MainScreen.styles'
import { Modal } from 'antd'
import { Selector } from '../Components/Selector/Selector'
import Context from '../Global/Context'
import { ShoppingCart } from '../Components/ShoppingCart/ShoppingCart'
import { OrdersIndicator } from '../Components/OrdersIndicator/OrdersIndicator'

export const MainScreen = () => {
    const { state, actions } = useContext(Context)
    const [ShowModal, setShowModal] = useState(true)

    return (
        <st.MainScreenContainer>
            <OrdersIndicator OpenModal={() => setShowModal(true)} />
            <Selector />
            { state.orders.length > 0  && <ShoppingCart /> }


            
        </st.MainScreenContainer>

    )
}