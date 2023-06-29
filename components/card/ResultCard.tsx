import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

type Props = {
    detail: string
    amount: string
    title: string
}

export default function ResultCard({amount, detail, title}: Props) {
  return (
    <Paper elevation={0} sx={{textAlign: 'center', bgcolor: 'transparent'}}>
        <Box sx={{width: 200, height: 100, bgcolor: 'white', mx: 'auto'}}>
            <em>{title}</em>
        </Box>
        <Typography variant='h6'>{detail}</Typography>
        <Typography variant='subtitle1'>{amount} terjual</Typography>
    </Paper>
  )
}