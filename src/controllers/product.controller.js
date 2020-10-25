import Product from '../models/Product.js';

export const createProduct = async (req, res) => {
    const data = req.body
    
    const product = new Product({
        img: data.img,
        title: data.title,
        desc: data.desc,
        price: data.price,
        category: data.category,
        manufacturer: data.manufacturer,
        expires: data.expires,
        units: data.units,
        stock: data.stock
    })
    
    try {
        await product.save()
        await res.send({ status: 'product successfully created' })
    } catch (e) {
        res.send(e)
    }
}

export const readProducts = async (req, res) => {
    try {
        let products = await Product.find()
        await res.json(products)
    } catch (e) {
        res.send(e)
    }
}

export const readProduct = async (req, res) => {
    try {
        let product = await Product.findOne({ _id: req.params.id })
        await res.json(product)
    } catch (e) {
        res.send({ status: 'product not found' })
    }
}

export const updateProduct = async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, { $set: req.body }, (e) => {
        if (e) return res.send(e)

        res.json({ status: 'product updated successfully' })
    })
}

export const deleteProduct = async (req, res) => {
    try {
        await Product.deleteOne({ _id: req.params.id })
        await res.json(req.params.id)
    } catch (e) {
        res.json({ status: 'product failed to delete' })
    }
}