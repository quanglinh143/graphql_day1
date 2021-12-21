const mongoose=require('mongoose');
const schema=mongoose.Schema

const BookSchema=new mongoose.Schema({
    name:{
        type:String
    },
    genre:{
        type:String
    },
    authorID:{
        type:String
    }
})

module.exports=mongoose.model('books',BookSchema)