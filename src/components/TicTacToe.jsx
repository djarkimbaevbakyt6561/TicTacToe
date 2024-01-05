import React from 'react'
import { borders } from '../utils/constants'
import TicTacToeItem from './TicTacToeItem'
import { styled } from '@mui/material'

const TicTacToe = () => {
  return (
      <Container>
          {borders.map((el) => {
              return <TicTacToeItem borderStyle={el}/>
          })}
    </Container>
  )
}

export default TicTacToe
const Container = styled('div')`
    display: flex;
    width:600px;
    flex-wrap: wrap;
`