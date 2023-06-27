import { Box } from '@mui/material'
import React from 'react'

type Props = {
    index: number
    indexSlide: number
}

export default function Indicator({index, indexSlide}: Props) {
  return (
    <Box sx={{ bgcolor: index === indexSlide ? 'red' : 'gray', width: '20%', height: '50px', borderRadius: '40px' }} />
  )
}