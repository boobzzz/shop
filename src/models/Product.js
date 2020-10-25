import mongoose from 'mongoose';

const { Schema } = mongoose

const ProductSchema = new Schema(
    {
        img: String,
        title: String,
        desc: String,
        price: Number,
        category: String,
        manufacturer: String,
        expires: Date,
        units: String,
        stock: Number
    }
)

const Product = mongoose.model('Product', ProductSchema)

export default Product;