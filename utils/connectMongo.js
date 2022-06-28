import mongoose from 'mongoose';

const connectMongo = async () => mongoose.connect(MONGO_URI);

export default connectMongo;