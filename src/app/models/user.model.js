import mongoose from "mongoose";

 
    export const userSchema=  mongoose.Schema({
        name:{
            type:String,
            required:[true,'Name is required']
        },
        age:{
            type:Number,
           

            required:true,
            validate:{
                validator:function(value){
                    return value>=15& value<=40

                },
                 message: props => `${props.value} is not allowed. Age must be between 15 and 40.`
            }


        },

        password:{
            type:String,
            required:[true,'Enter password'],
            select:false,
            default:'1234'

        },
        role:{
            type:String,

     
            enum: {
     values: ['opening', 'open', 'closing', 'closed'],
     message: 'enum validator failed for path `{PATH}` with value `{VALUE}`'
         },
         required:[true,'role is required']
        },

        parentId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required:[ function(){   return  this.age<18  },'parentId is required' ]
  }
    },{
        methods:{
            getSummary(){
                
                return  `${this.name} is ${this.age} years old`

            }
        },
        statics:{
           async findByName(name){

                return this.findOne({name})
            }
        }
    
    }) 

   userSchema.pre('save',  function () {
    console.log('hello');
    console.log( ' before',this)
    this.age=29
   
   
    this.password=this.name+this.age
     console.log('after',this)

    // You can await something here
});

   userSchema.post('save',  function (doc) {

    console.log('after saving');
    console.log(` your password is ${doc.password}`)
    

    // You can await something here
});


    
    



    export   const User= mongoose.model('User',userSchema)
