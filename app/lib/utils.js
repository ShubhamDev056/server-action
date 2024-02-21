import mongoose from "mongoose";
export const connectToDB = async () => {
  /*   Mongoose readyState
   ready states being:

     0: disconnected
     1: connected
     2: connecting
     3: disconnecting

**/
  const connection = {};
  try {
    if (connection.isConnected) return;

    const db = await mongoose.connect(process.env.MONGO_URL);
    connection.isConnected = db.connections[0].readyState;
    console.log("db connection", connection);
  } catch (error) {
    throw new Error(error);
  }
};
