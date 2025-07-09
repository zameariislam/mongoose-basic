
import express from 'express'
import { User } from '../models/user.model.js'

 const userRouter= express.Router()


userRouter.get('/',async (req,res)=>{ 

   try{

     const user= await  User.findOne({name:'Zameari'})


   

    res.send(user)

    }catch(error){
        console.log(error.error.message)

        res.status(401).json({
            status:false,
            message:error.message
        })

    }

})


userRouter.post('/create-user', async (req,res)=>{


      const body=req.body
    

    try{

     const user= await User.create(body)
     console.log(user.toObject())

    res.send('created')

    }catch(error){
        console.log(error.message)

        res.status(401).json({
            status:false,
            message:error.message
        })

    }

   
})


export default userRouter








