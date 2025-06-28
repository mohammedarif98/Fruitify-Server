import mongoose from 'mongoose';
import config from './config.js';



const connectDB = async() => {
    try{
        const mongoUri = config.db.uri;
        if (!mongoUri) throw new Error('MongoDB connection URI is not defined in environment variables');

        console.log('Connecting to MongoDB...');
        await mongoose.connect(mongoUri, config.db.options);
        console.log('MongoDB connected successfully');
    }catch(error){
        console.log('MongoDB connection error:', error.message);
        process.exit(1)
    }
} 


export default connectDB;