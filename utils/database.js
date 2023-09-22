import mongoose from "mongoose";

let isConnect = false;
export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnect) {
        console.log('MongoDb Connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"SharePrompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000
            
        });
        isConnect = true;

        console.log('MongoDB connected')
    } catch (error) {
        console.log(error);
    }
}