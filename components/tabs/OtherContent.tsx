import { Box, Button, Typography } from '@mui/material'
import React from 'react'

type Props = {}

export default function OtherContent({}: Props) {
  return (
    <Box>
        <Typography variant='h5' component={'h4'}>Kenapa Harus di mobbi?</Typography>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Box sx={{width: '30%'}} component={'figure'}>IMAGE</Box>
            <Box sx={{width: '70%'}}>
                <Typography variant='h6' component={'h5'}>Jual lebih mudah</Typography>
                
                <Typography variant='body1' component={'p'}>Ada harga jual online</Typography>
                <Typography variant='body1' component={'p'}>Transparan, kapanpun dimanapun</Typography>
            </Box>
        </Box>

        <Button variant='contained' color='secondary'>Jual Sekarang</Button>
    </Box>
  )
}