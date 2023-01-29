import React from 'react'
import { Container, CalculatorContainer, Button } from '../themes/IphoneCalculator'

export const colors = {
    BLACK: '#333333',
    GRAY: '#A5A5A5',
    ORANGE: '#F1A33B'
  }

export const IphoneCalculator = () => {
  return <Container>
    <CalculatorContainer>
      <Button background={colors.GRAY}/>
      <Button background={colors.GRAY}/>
      <Button background={colors.GRAY}/>
      <Button background={colors.ORANGE}/>
      <Button />
      <Button />
      <Button />
      <Button background={colors.ORANGE}/>
      <Button />
      <Button />
      <Button />
      <Button background={colors.ORANGE}/>
      <Button />
      <Button />
      <Button />
      <Button background={colors.ORANGE}/>
      <Button width="190px" />
      <Button />
      <Button background={colors.ORANGE}/>
    </CalculatorContainer>
  </Container>
}
