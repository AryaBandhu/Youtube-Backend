import mongoos from 'mongoose';
import { DB_name } from '../constants.js';

const connectDB = async () => {
    try {
        await mongoos.connect(`${process.env.MONGODB_URI}/${DB_name}`);
        console.log('MongoDB connected');
    }
    catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;