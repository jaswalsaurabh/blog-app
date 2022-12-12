import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { BlogData } from '../data/BlogsData'

const Posts = () => {
  return (
    <Grid container flexDirection={"column"} sm={8} padding={4} >
    {BlogData.map((item,index)=>(
        <Paper key={index} elevation={7} >
        <Typography variant={"h5"} >{item.title}</Typography>
        <Typography variant={"subtitle2"} >{item.author}</Typography>
        </Paper>
    ))}
    </Grid>
  )
}

export default Posts