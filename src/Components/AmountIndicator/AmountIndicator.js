import React, { useState, useEffect, useContext } from 'react'
import * as st from './AmountIndicator.styles'
import { Input, Button, Icon } from 'antd'
import Context from '../../Global/Context'


export const AmountIndicator = props => {
    const { state, actions } = useContext(Context)
    const [RenderedName] = useState(props.name.charAt(0).toUpperCase() + props.name.slice(1))
    const [Amount, setAmount] = useState(0)
    useEffect(() => console.log("loaded"), [])


    const HandleAdd = () => {
        let new_order = state.orders;
        new_order.push({name: props.name, amount: Amount})
        actions({
            type: 'setState',
            payload: { ...state, orders: new_order }
        })
        props.hideAmount()
    }

    


    return (
        <st.AmountIndicatorContainer>
            <st.SelectedFruitContainer>
                <st.FruitImage src={require(`../../Assets/${props.name}.svg`)} />
                <st.FruitName> {RenderedName} </st.FruitName>
            </st.SelectedFruitContainer>

            <st.AmountInputContainer>
                <Input onChange={e => setAmount(e.target.value)} placeholder='Cantidad...' min={1} type='number' />
            </st.AmountInputContainer>

            <st.AcceptButtonContainer>
                <Button onClick={HandleAdd} type='primary'> Añadir  </Button>
            </st.AcceptButtonContainer>

            <st.BackButtonContainer onClick={() => props.hideAmount()}>
                <Icon style={{ color: '#505050' }} type='close' />
            </st.BackButtonContainer>
        </st.AmountIndicatorContainer>
    )
}