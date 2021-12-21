const express=require('express');
const app=express();
const {ApolloServer}=require('apollo-server-express');
const mongoose=require('mongoose');


const typeDefs=require('./schema/schema');
const resolvers=require('./resolver/resolver');
const mongoDataMethods =require('./data/db');
// connectDB
const connectDB=async()=>{
    try {
        await mongoose.connect('mongodb+srv://graphql1:graphql1@cluster0.cdhog.mongodb.net/Cluster0?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
connectDB()
const server=new ApolloServer({
    typeDefs,
    resolvers,
    context:()=>({mongoDataMethods})
})


server.applyMiddleware({app});
app.listen(4000,()=>{
    console.log(`running man!`)
})


