import React, { useContext, useState, useEffect } from 'react'
import * as st from './ShoppingCart.styles'
import Context from '../../Global/Context'
import { Icon } from 'antd'
import Axios from 'axios'



export const ShoppingCart = () => {
    const { state, actions } = useContext(Context)
    const [CurrentOrder, setCurrentOrder] = useState([])


    //Este hook actualiza la lista local de frutas seleccionadas cada vez que se cambia el estado global
    useEffect(() => {
        setCurrentOrder(state.orders)
    }, [state.orders])



    // Esta función elimina la fruta seleccionada sacandolo del array y actualizando el estado global
    const HandleRemove = index => {
        let new_orders = state.orders
        new_orders.splice(index, 1)
        console.log(new_orders)
        actions({
            type: 'setState', 
            payload: { ...state, orders: new_orders }
        })
    }



    // Esta función envía la petición http al json-server para crear un nuevo pedido
    const HandleSendFullOrder = async () => { 
        let fruits = state.orders.map(x => x.name)
        let amounts = state.orders.map(x => x.amount)
        let total_amounts = amounts.reduce((a, b) => parseInt(a) + parseInt(b));
        let finalvalue = total_amounts > 5 ?  total_amounts * 7 - (total_amounts * 7 * 0.1 ) :  total_amounts * 7
        console.log(state.orders)
        Axios({
            method: 'post',
            url: 'http://localhost:2486/data',
            data: {
                id: GetRandomId(),
                fruits: fruits,
                amounts: amounts,
                final_price: finalvalue,
                discount_applied: total_amounts > 5 ? true : false
            }
        })
            .then(res => {
                console.log("%cSuccess ", "color: green; font-weight: bolder", res)
                actions({
                    type: 'setState',
                    payload: {...state, orders: []}
                })
            })
            .catch(err => console.error(err))
    }

    const GetRandomId = () => 
        Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);



    // Esta función retorna todos los elementos de la lista local (que se actualiza del estado global)
    const ReturnListOfItemsInOrder = () => {
        return (
            CurrentOrder.map((order_item, index) => 
                <st.OrderItem key={index}>
                    <st.OrderItemImage src={require(`../../Assets/${order_item.name}.svg`)} />
                    <st.OrderItemAmount> Cantidad: {order_item.amount} </st.OrderItemAmount>
                    <st.OrderItemName> {order_item.name} </st.OrderItemName>

                    <st.RemoveButton onClick={() => HandleRemove(index)} > <Icon style={{color: '#505050 '}} type='close' /> </st.RemoveButton>
                </st.OrderItem>    
            )
        )
    }

    const GetSubTotalPrice = () => {
        let total_amounts = state.orders.map(x => parseInt(x.amount)).reduce((a, b) => a+b);
        let finalvalue = total_amounts * 7
        return total_amounts > 5 ? finalvalue - (finalvalue * 0.1) : finalvalue
    }

    const CheckIfDiscountApplies = () => {
        let total_amounts = state.orders.map(x => parseInt(x.amount)).reduce((a, b) => a+b);
        return total_amounts > 5 ? true : false
    }
    

    return (
        <st.ShoppingCartContainer>
            <st.ShoppingCartTitle> 
                Productos Seleccionados 
                <st.SendOrderButton onClick={HandleSendFullOrder}> Enviar pedido </st.SendOrderButton>
                <st.SubTotal> Subtotal: ${ GetSubTotalPrice() }  {CheckIfDiscountApplies() && "-10%" }  </st.SubTotal>
            </st.ShoppingCartTitle>
            
            <st.OrderProductsListContainer>
                {ReturnListOfItemsInOrder()}
            </st.OrderProductsListContainer>

        </st.ShoppingCartContainer>
    )
} 