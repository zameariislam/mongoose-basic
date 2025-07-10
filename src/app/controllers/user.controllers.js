
import express from 'express'
import { User } from '../models/user.model.js'

 const userRouter= express.Router()


userRouter.get('/',async (req,res)=>{ 

   try{

     const user=  await User.findByName('Naznin')

     const user1= new User()
     user1.getSummary()
      console.log( user.getSummary()
)

   

    res.send(user)

    }catch(error){
      

        res.status(401).json({
            status:false,
            message:error.message
        })

    }

})


userRouter.post('/create-user', async (req,res)=>{


      const body=req.body
    

    try{

     const newUser= new User(body)
     newUser.save()
    

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








