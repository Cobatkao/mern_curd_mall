import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`Mongodb connected at ${conn.connection.host}`);
  } catch (error) {
    console.warn(`Error: ${error.message}`);
  }
}

export default connectDB;