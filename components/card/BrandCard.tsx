import { Paper, PaperProps, Typography } from '@mui/material'
import React, { useState } from 'react'


type Props = {
    brand: string
    amount: string
    br: string
    handleClick?: any
}


export default function BrandCard({brand, amount, br, handleClick }: Props) {
  return (
    <Paper elevation={0} component={'button'} onClick={handleClick}>
        <Paper elevation={2} sx={{width: 100, height: 100}} />
        <Typography variant='h5'>{brand}</Typography>
        <Typography variant='subtitle2'>{amount} terjual</Typography>
    </Paper>
  )
}