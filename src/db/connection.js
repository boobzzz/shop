import mongoose from 'mongoose';
import 'dotenv/config.js';

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, options)
        console.log('Mongo database connected...')
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()