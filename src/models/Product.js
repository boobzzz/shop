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
        expires: String,
        pcs: Number,
        stock: Number
    }
)

const ProductModel = mongoose.model('Product', ProductSchema)

export default ProductModel;