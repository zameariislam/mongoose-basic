

import mongoose, { Schema } from 'mongoose';
import app from './app.js';



    let server;
    let port=3000;

   const main= async function(){

        try{
            server= await  mongoose.connect('mongodb://127.0.0.1:27017/modeldb');
        console.log('database connected')

           server= app.listen(port,()=>{
              console.log(`app is running on port ${port}`)
           })

       


 

        } catch(error){

            console.log(error.message);
            

        }
     
     }

     main()