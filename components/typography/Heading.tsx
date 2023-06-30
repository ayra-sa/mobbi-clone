import { Typography, styled } from "@mui/material"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const StyledHeading = styled(Typography)(({theme}) => ({
    color: '#17376D'
}))

export const Heading3 = ({children}: Props) => {
    return <StyledHeading variant="h3" as='h2'>{children}</StyledHeading> 
}