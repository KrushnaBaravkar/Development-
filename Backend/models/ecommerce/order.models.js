import mongoose  from 'mongoose'

const orderItemSchema = new.mongoose.Schema({
    productId: {
        type: mongoose.Schema.type.ObjectID,
        ref: "Product"
    },

    quantity: {
        type: Number,
        require:true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        require:true
    },

    orderItems: {
        type: [orderItemSchema],
        require:true
    },

    address: {
        type:String,
        require:true
    },

    customer: {
        type: mongoose.Schema.type.ObjectID,
        ref: "User",
        require:true
    },

    deliveryStatus:{
        type:String,
        enum:["PENDING", "DELIVERED", "CANCLED"],
        default: "PENDING"
    }
}, {timestamps: true})

export const Order = mongoose.model("Order", orderSchema);