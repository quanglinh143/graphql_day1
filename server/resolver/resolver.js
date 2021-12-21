const {books,authors} =require('../data/static');
const Author =require('../models/Author')
const Book =require('../models/Book')

const resolvers={
    // Query
    Query:{
        books: async (parent,args,{mongoDataMethods})=>{
            return await mongoDataMethods.getAllBooks();
        },
        book: async (parent,args,{mongoDataMethods})=>await mongoDataMethods.getBookById(args.id),
        authors:async(parent,args,{mongoDataMethods})=>{
            return await mongoDataMethods.getAllAuthors()
        },
        author: async (parent,args,{mongoDataMethods})=>await mongoDataMethods.getAuthorById(args.id),
        

    },
    Book:{
        author:async ({authorID},args,{mongoDataMethods})=>{
            return await mongoDataMethods.getAuthorById(authorId)
         }   
    },
    Author:{
        books:async ({id},args,{mongoDataMethods})=>{
            return await mongoDataMethods.getAllBooks({authorID:id})
        }
    },

    // Mutation
    Mutation:{
        createAuthor: async (parent,args,{mongoDataMethods})=>{
            return await mongoDataMethods.createAuthor(args)
        },
        createBook: async (parent,args,{mongoDataMethods})=>{
            return await mongoDataMethods.createBook(args)
        }
        
    },
  
}

module.exports=resolvers