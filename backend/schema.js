
const typeDefs = `

type Author{
    id: ID!
    info: Person
}
type Product{
    id: ID!
    name: String,
    price: Int
}

type Person
{
    name: String!
    age : Int
    gender: String
}
type Query
{
    getProducts:[Product]
    retrieveProducts(id:ID!):Product
}

type DeleteMessage
{
    id:ID!,
    message:String
}

type Mutation
{
   createProduct(name: String!, price: Int!): Product,
   updateProduct(id:ID!,name:String,price:Int):Product,
   deleteProduct(id:ID!): DeleteMessage,
}

type Subscription
{
    createAuthorWithSubscription: Author
}

`;

module.exports=typeDefs;