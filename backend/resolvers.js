const authors = require('./author')
const Products = require('./api/models/product')
const mongoose = require('mongoose');

const resolvers = {
    Query: {
        retrieveProducts: async (obj, { id }) => {
            console.log("ID", id);
            const product = await Products.findById(id);
            console.log("ID", product);
            return product;
        },
        getProducts: async () => {
            const products = await Products.find();
            return products;

        }
    },
    Mutation:
    {
        createProduct: async (obj, args) => {
            const { name, price } = args;
            const _id = new mongoose.Types.ObjectId()
            const product = await new Products({
                _id,
                name,
                price
            }).save();
            console.log("Product", product)
            return product;
        },
        updateProduct: async (obj, { id, name, price }) => {
            const updatedProduct = {};

            if (name) {
                updatedProduct.name = name
            }
            if (price) {
                updatedProduct.price = price
            }
            const product = await Products.findByIdAndUpdate(id, updatedProduct, { new: true })
            return product;

        },
        deleteProduct: async (obj, { id }) => {
            await Products.findByIdAndDelete(id);
            return { id, message: `Deleted author with id ${id}` }
        }

    }
}

module.exports = resolvers;