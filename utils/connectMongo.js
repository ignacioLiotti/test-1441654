import mongoose from 'mongoose';

const connectMongo = async () => mongoose.connect('mongodb+srv://IgnacioLiotti:yVEWig5ZJPrx8xP@devlightscluster.c014d.mongodb.net/marketing');

export default connectMongo;