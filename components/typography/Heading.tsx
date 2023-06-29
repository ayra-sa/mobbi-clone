import { Typography } from "@mui/material"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Heading3 = ({children}: Props) => {
    return <Typography variant="h3" component={'h2'}>{children}</Typography> 
}