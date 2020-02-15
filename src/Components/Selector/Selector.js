import React, { useState, useEffect } from 'react'
import * as st from './Selector.styles'
import { Input } from 'antd'
import { FruitList } from '../FruitList/FruitList'
import { AmountIndicator } from '../AmountIndicator/AmountIndicator'

export const Selector = () => {
    const [SearchText, setSearchText] = useState("")
    const [AmountModal, showAmountModal] = useState({ name: null, amount: 0 })
    const [ShowAmount, setShowAmount] = useState(false)

    useEffect(() => {
        AmountModal.name && ResetName()
    }, [AmountModal.name])


    const ResetName = () => {
        setShowAmount(false)
        setTimeout(() => setShowAmount(true), 0)
    }



    return (
        <st.MainSelectorContainer>
            <st.InputContainer>
                <st.Title onClick={() => console.log(AmountModal)}>Mercado de frutas</st.Title>
                <Input onChange={e => setSearchText(e.target.value)} style={{ fontSize: '1.2em' }} placeholder='Busca alguna fruta... ' />
            </st.InputContainer>

            <st.ListContainer>
                {
                    !SearchText.length ?
                        <FruitList PlaceAmountModal={fruit => showAmountModal({ ...AmountModal, name: fruit })} filter={null} />
                        :
                        <FruitList PlaceAmountModal={fruit => showAmountModal({ ...AmountModal, name: fruit })} filter={SearchText} />
                }
            </st.ListContainer>

            <st.AmountIndicatorContainer>
                {ShowAmount && <AmountIndicator name={AmountModal.name} hideAmount={() => setShowAmount(false)} />}
            </st.AmountIndicatorContainer>
        </st.MainSelectorContainer>
    )
}