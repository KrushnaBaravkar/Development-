import mongoose  from 'mongoose'

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },

    discription:{
        type: String,
        require: true
    },

    productImage: {
        type:String
    },

    price: {
        type: Number,
        default:0,
        require: true
    },

    stock: {
        type: Number,
        default: 0
    },

    catagory: {
        type: mongoose.Schema.type.ObjectID,
        ref: "Catagory"
    },

    owner: {
        type: mongoose.Schema.type.ObjectID,
        ref: "User"
    }
    
}, {timestamps: true})

export const Product = mongoose.model("Product", productSchema);