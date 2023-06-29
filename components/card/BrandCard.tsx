import { Paper, PaperProps, Typography } from '@mui/material'
import React, { useState } from 'react'


type Props = {
    brand: string
    amount: string
    handleClick?: any
}


export default function BrandCard({brand, amount, handleClick }: Props) {
  return (
    <Paper elevation={0} component={'div'} onClick={handleClick}>
        <Paper elevation={2} sx={{width: 100, height: 100}} />
        <Typography variant='h6'>{brand}</Typography>
        <Typography variant='subtitle2'>{amount} terjual</Typography>
    </Paper>
  )
}