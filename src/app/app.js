
import express from 'express'
import userRouter from './controllers/user.controllers.js';




const app=express()

app.use(express.json());
app.use('/user',userRouter)


app.get('/',(req,res)=>{

    res.send('Hello World')

})



export default app